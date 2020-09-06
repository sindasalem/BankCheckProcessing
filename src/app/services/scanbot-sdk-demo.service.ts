import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { File } from '@ionic-native/file/ngx';

import ScanbotSdk, { DocumentScannerConfiguration, ScanbotSDKConfiguration } from 'cordova-plugin-scanbot-sdk';

import { DialogsService } from './dialogs.service';

@Injectable()
export class ScanbotSdkDemoService {

    private readonly myLicenseKey =
  "llxbJAPlCotlrv40v8MYzA8Athk+KW" +
  "Y+1asoUFXkUsoG4pd3yi1xJhTkaxZM" +
  "O5NBvU60C8ulS9mofGa+zHM6XzplGX" +
  "4dx0BxkRFK+zAVTgVQkGAJIFLo0TIp" +
  "DCp2LHYm2gbDAlFZ5Cc04hlD/f6zTm" +
  "vGlZjWl4Gmyq7ulNiov+yzyNERvMoS" +
  "FD9AmHB7ywJbgx4hWLFbXwPUJZsoYw" +
  "HSq5EHqnRT0BWU9gEOv6IODrafVW3C" +
  "iBV1MyQOt4BXi5ty3Fb2bDVTLif/8s" +
  "317XatumTrNqATyxDAPK+O3oHcxViz" +
  "wwcpRdDp0xnu0ESyPFI4ffwYq/JWJ8" +
  "xP0U1OBZL5Mw==\nU2NhbmJvdFNESw" +
  "pjb20uZXhhbXBsZS5hcHAKMTYwMDMw" +
  "MDc5OQo1OTAKMw==\n";
  

    public SDK = ScanbotSdk.promisify();

    constructor(private platform: Platform,
                private dialogsService: DialogsService,
                private file: File) {
        this.platform.ready().then(() => this.initScanbotSdk());
    }

    private initScanbotSdk() {
        // optional storageBaseDirectory - see the comments below.
        const customStorageBaseDirectory = this.getDemoStorageBaseDirectory();

        const config: ScanbotSDKConfiguration = {
            loggingEnabled: true, // Consider switching logging OFF in production builds for security and performance reasons!
            licenseKey: this.myLicenseKey,
            storageImageFormat: 'JPG',
            storageImageQuality: 80,
            storageBaseDirectory: customStorageBaseDirectory,
            documentDetectorMode: 'ML_BASED'
        };

        return this.SDK.initializeSdk(config).then(result => {
            console.log(JSON.stringify(result));
        }).catch((err) => {
            console.error(JSON.stringify(err));
        });
    }

    private getDemoStorageBaseDirectory(): string {
        // tslint:disable:max-line-length
        // !! Please note !!
        // It is strongly recommended to use the default (secure) storage location of the Scanbot SDK.
        // However, for demo purposes we overwrite the "storageBaseDirectory" of the Scanbot SDK by a custom storage directory.
        //
        // On Android we use the "externalDataDirectory" which is a public(!) folder.
        // All image files and export files (PDF, TIFF, etc) created by the Scanbot SDK in this demo app will be stored
        // in this public storage directory and will be accessible for every(!) app having external storage permissions!
        // Again, this is only for demo purposes, which allows us to easily fetch and check the generated files
        // via Android "adb" CLI tools, Android File Transfer app, Android Studio, etc.
        //
        // On iOS we use the "documentsDirectory" which is accessible via iTunes file sharing.
        //
        // For more details about the storage system of the Scanbot SDK Plugin please see our docs:
        // - https://scanbotsdk.github.io/documentation/cordova/
        //
        // For more details about the file system on Android and iOS we also recommend to check out:
        // - https://developer.android.com/guide/topics/data/data-storage
        // - https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/FileSystemProgrammingGuide/FileSystemOverview/FileSystemOverview.html
        // tslint:enable:max-line-length

        if (this.platform.is('android')) {
            return this.file.externalDataDirectory + 'my-custom-storage';
        } else if (this.platform.is('ios')) {
            return this.file.documentsDirectory + 'my-custom-storage';
        }
        return null;
    }

    public async checkLicense() {
        const result = await this.SDK.getLicenseInfo();

        if (result.info.isLicenseValid) {
            // OK - we have a trial session, a valid trial license or valid production license.
            return true;
        }
        await this.dialogsService.showAlert('Scanbot SDK (trial) license has expired!');
        return false;
    }

    public globalDocScannerConfigs(): DocumentScannerConfiguration {
        return {
            // Customize colors, text resources, behavior, etc..
            cameraPreviewMode: 'FIT_IN',
            orientationLockMode: 'PORTRAIT',
            pageCounterButtonTitle: '%d Page(s)',
            multiPageEnabled: true,
            // maxNumberOfPages: 3,
            // documentImageSizeLimit: { width: 1500, height: 2000 },
            // shutterButtonHidden: true,
            // bottomBarBackgroundColor: '#0000ff',
            // ...
        };
    }
}
