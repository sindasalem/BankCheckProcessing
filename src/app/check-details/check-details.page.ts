import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataTransferService } from '../data-transfer.service';

@Component({
  selector: 'app-check-details',
  templateUrl: './check-details.page.html',
  styleUrls: ['./check-details.page.scss'],
})
export class CheckDetailsPage implements OnInit {
  myData: any;
  constructor(private router: ActivatedRoute,private sharingService: DataTransferService) { 
  }

  ngOnInit() {
    this.myData = this.sharingService.sharingValue;
    console.log(this.myData)
   }

}
