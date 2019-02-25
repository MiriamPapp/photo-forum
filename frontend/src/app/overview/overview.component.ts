import { Component, OnInit } from '@angular/core';
import { AwssessionService } from '../services/awssession.service';
import { S3 } from 'aws-sdk';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  s3: S3;

  constructor(
    private awsSession:  AwssessionService,
  ) { }

  ngOnInit() {
    this.s3 = this.awsSession.awsS3;
  }

}
