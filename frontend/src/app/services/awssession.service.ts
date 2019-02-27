import { Injectable } from '@angular/core';
import { S3, AWSError } from 'aws-sdk';
import { environment } from 'src/environments/environment';
import { ListObjectsV2Output } from 'aws-sdk/clients/s3';

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
      const extThis = this;
      // check if S3 is really connected
      try {
        const s3list = await this.awsS3.listObjectsV2({ Bucket: environment.contentBucketName, Delimiter: '/' }).promise();
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
