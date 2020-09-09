import { Injectable } from '@angular/core';
import { Page } from 'plugins/cordova-plugin-scanbot-sdk';
import { SanitizedPage } from './services/image-results.repository';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  private sharingData: any;
  private image : SanitizedPage;
  constructor() { }

  get sharingValue() {
    return this.sharingData
  }

  set sharingValue(obj) {
    this.sharingData = obj;
  }

  get sharingImage(){
    return this.image
  }

  set sharingImage(obj: SanitizedPage)
  {
    this.image = obj
  }
}
