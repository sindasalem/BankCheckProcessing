import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  private sharingData: any;
  constructor() { }

  get sharingValue() {
    return this.sharingData
  }

  set sharingValue(obj) {
    this.sharingData = obj;
  }
}
