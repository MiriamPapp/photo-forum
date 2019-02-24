import { Injectable } from '@angular/core';
import { S3 } from 'aws-sdk';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AwssessionService {

  accesskey: string;
  secretkey: string;
  keysAreSet: boolean;
  awsSessionEstablished: boolean;
  awsS3: S3;

  constructor() { 
    this.keysAreSet = false;
    this.awsSessionEstablished = false;
    this.accesskey = '';
    this.secretkey = '';
  }

  setKeys(accessKey: string, secretKey: string) {
    this.awsS3 = new S3({
      region: environment.region,
      endpoint: environment.contentBucketEndpoint,
      accessKeyId: accessKey,
      secretAccessKey: secretKey,
      sslEnabled: true,
      useDualstack: true,
      computeChecksums: true,
      apiVersion: 'latest',
      signatureVersion: 'v4'
    });

  }

  isLoggedIn(): boolean {
    return this.awsSessionEstablished;
  }

}
