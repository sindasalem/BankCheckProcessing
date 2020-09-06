import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

import { ImageFilter, Page } from 'cordova-plugin-scanbot-sdk';

import { DialogsService } from '../services/dialogs.service';
import { ScanbotSdkDemoService } from '../services/scanbot-sdk-demo.service';
import { ImageResultsRepository, SanitizedPage } from '../services/image-results.repository';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Base64 } from '@ionic-native/base64/ngx';
import { DataTransferService } from '../data-transfer.service';
import { LoadingController } from '@ionic/angular';
import { async } from '@angular/core/testing';

@Component({
    selector: 'app-image-view',
    templateUrl: 'image-view.page.html',
})
export class ImageViewPage implements OnInit {

    public page: SanitizedPage;
    

    private imageFilterList: ImageFilter[] = [
        'NONE',
        'COLOR_ENHANCED',
        'GRAYSCALE',
        'BINARIZED',
        'COLOR_DOCUMENT',
        'PURE_BINARIZED',
        'BACKGROUND_CLEAN',
        'BLACK_AND_WHITE',
        'OTSU_BINARIZATION',
        'DEEP_BINARIZATION',
        'EDGE_HIGHLIGHT',
        'LOW_LIGHT_BINARIZATION',
        'LOW_LIGHT_BINARIZATION_2',
    ];

    constructor(private scanbotService: ScanbotSdkDemoService,
                private imageResultsRepository: ImageResultsRepository,
                private dialogsService: DialogsService,
                private router: Router,
                private route: ActivatedRoute,
                private actionSheetController: ActionSheetController,
                private http: HttpClient,
                private base64: Base64,
                private dataTransferService: DataTransferService,
                public loadingCtrl: LoadingController) { }

    ngOnInit() {
        this.route.paramMap.pipe(
            switchMap((params: ParamMap) => of(params.get('pageId')))
        ).subscribe(pageId => {
            this.page = this.imageResultsRepository.getPageById(pageId);
        });
    }

    async startCroppingScreen() {
        if (!(await this.scanbotService.checkLicense())) { return; }

        const result = await this.scanbotService.SDK.UI.startCroppingScreen({
            page: this.page as Page,
            uiConfigs: {
                // Customize colors, text resources, behavior, etc..
                doneButtonTitle: 'Save',
                orientationLockMode: 'PORTRAIT'
                // ...
            }
        });

        if (result.status === 'CANCELED') { return; }

        this.updatePage(result.page);
    }

    async deletePage() {
        await this.scanbotService.SDK.removePage({page: this.page as Page});
        this.imageResultsRepository.removePage(this.page);
        await this.router.navigate(['/image-results']);
    }

    private updatePage(page: Page) {
        this.page = this.imageResultsRepository.updatePage(page);
    }

    async showFilterSelection() {
        const buttons = [];
        this.imageFilterList.forEach(f => {
            buttons.push({
                text: f,
                handler: () => { this.applyImageFilter(f); }
            });
        });

        buttons.push({
            text: 'Cancel',
            role: 'cancel',
            handler: () => { }
        });

        const actionSheet = await this.actionSheetController.create({
            header: 'Select an Image Filter',
            buttons: buttons
        });
        await actionSheet.present();
    }

    private async applyImageFilter(filter: ImageFilter) {
        if (!(await this.scanbotService.checkLicense())) { return; }

        const loading = await this.dialogsService.createLoading('Applying image filter ...');
        try {
            loading.present();

            const result = await this.scanbotService.SDK.applyImageFilterOnPage({page: this.page as Page, imageFilter: filter});
            this.updatePage(result.page);
        }
        finally {
            await loading.dismiss();
        }
    }

    private async upload(){
        const loading = this.loadingCtrl.create({
            message: 'Please wait...',
          });
           (await loading).present();
        //let  url = 'http://10.0.2.2:5000/upload';
        let  url = 'http://192.168.23.57:5000/upload';
        const date = new Date().valueOf();
      
        // Replace extension according to your media type
        const imageName = date+ '.jpeg';
        // call method that creates a blob from dataUri
        //console.log(this.page.documentImageFileUri)
        this.base64.encodeFile(this.page.documentImageFileUri).then((base64File: string) => {
            //console.log(base64File);
            const imageBlob = this.dataURItoBlob(base64File);
            const imageFile = new File([imageBlob], imageName, { type: 'image/jpg' })
            let  postData = new FormData();
            let blob = new Blob([imageBlob],{ type: 'image/jpg' })
            let headers = new HttpHeaders();
            headers.append('Content-Type', 'multipart/form-data');
            
            postData.append('file', blob,imageName);
          
            this.http.post(url, postData,{headers: headers})
            .subscribe(async data => {
                console.log(data);
                this.dataTransferService.sharingValue = data;
                (await loading).dismiss();
                this.router.navigate(['/check-details'])
                }, async error => {
                    (await loading).dismiss();
                console.log(error);
            });
          }, async (err) => {
            console.log(err);
            (await loading).dismiss();
          });
        

    }

    dataURItoBlob(dataURI: String) {
        var byteString = atob(dataURI.split(',')[1]);
        var ab = new ArrayBuffer(byteString.length);
        var ia = new Uint8Array(ab);
    
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ab], { type: 'image/jpeg' });
    }
}