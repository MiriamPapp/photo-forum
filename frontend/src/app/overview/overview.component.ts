import { Component, OnInit } from '@angular/core';
import { AwssessionService } from '../services/awssession.service';
import { S3 } from 'aws-sdk';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  s3: S3;
  openCategories: string[];

  constructor(
    private awsSession:  AwssessionService,
  ) { }

  ngOnInit() {
    this.s3 = this.awsSession.awsS3;

    // list open categories
    // list all objects in the root folder (empty prefix)
    this.s3.listObjectsV2({ Bucket: environment.contentBucketName, Delimiter: '/', Prefix: 'open/' },
      function(err, data) {        
        if (err) console.log('error occured', err, err.stack);
        else {
          data.CommonPrefixes.forEach(element => {
            console.log(element.Prefix);
          });
        }
      });

  }

}
