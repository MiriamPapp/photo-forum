import { Injectable } from '@angular/core';
import { AwssessionService } from './awssession.service';
import { S3 } from 'aws-sdk';
import { promise } from 'protractor';

export interface User {
  userName: string;
  userFirstname: string;
  userLastName: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsernameService {

  haveUsername: boolean;
  user: User;
  s3: S3;
  bucket: string;

  constructor(private awssession: AwssessionService) { 
    this.haveUsername = false;
    this.s3 = awssession.getS3();
    this.bucket = awssession.getBucket();
  }

  getUser(): User | null {
    if (this.haveUsername) {
      return this.user;
    }
    if (!this.awssession.isLoggedIn()) {
      return null;
    }
    // try to read the user objects under config, the one which works is the user file
    this.s3.listObjectsV2({ Bucket: this.bucket, Delimiter: '/', Prefix: 'config/' }) promise

  }


}
