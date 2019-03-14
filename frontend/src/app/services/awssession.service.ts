import { Injectable } from '@angular/core';
import { S3 } from 'aws-sdk';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AwssessionService {

  awsSessionEstablished: boolean;
  awsS3: S3;

  constructor() {
    this.awsSessionEstablished = false;
  }

  async setKeys(accessKey: string, secretKey: string): Promise<boolean> {
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
      // check if S3 is really connected
      try {
        // list all objects in the root folder (empty prefix)
        await this.awsS3.listObjectsV2({ Bucket: environment.contentBucketName, Delimiter: '/', Prefix: '' }).promise();
        this.awsSessionEstablished = true;
      }
      catch(error) {
        this.awsSessionEstablished = false;
      }
      return this.awsSessionEstablished;
  }

  getS3(): S3 {
    return this.awsS3;
  }

  isLoggedIn(): boolean {
    return this.awsSessionEstablished;
  }

}
