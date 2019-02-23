import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AwssessionService {

  accesskey: string;
  secretkey: string;
  keysAreSet: boolean;

  constructor() { 
    this.keysAreSet = false;
    this.accesskey = '';
    this.secretkey = '';
  }

  setKeys(accessKey: string, secretkey: string, region: string) {
    // todo configure AWS here
  }

}
