import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataTransferService } from '../data-transfer.service';
import { SanitizedPage } from '../services/image-results.repository';

@Component({
  selector: 'app-check-details',
  templateUrl: './check-details.page.html',
  styleUrls: ['./check-details.page.scss'],
})
export class CheckDetailsPage implements OnInit {
  myData: any;
  image : SanitizedPage;
  constructor(private router: ActivatedRoute,private sharingService: DataTransferService) { 
  }

  ngOnInit() {
    this.myData = this.sharingService.sharingValue;
    this.image = this.sharingService.sharingImage;
    console.log(this.image.documentImageFileUri)
    console.log(this.myData)
   }

}
