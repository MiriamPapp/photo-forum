import { Component, OnInit } from '@angular/core';
import { AwssessionService } from '../services/awssession.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  accesskey: string = '';
  secretkey: string = '';
  accessKeysFoundInStore: boolean = false;
  
  notLoggedIn = true;

  onSubmit() {
    this.notLoggedIn = false;
  }

  constructor(private awsSessionService: AwssessionService) { 
    
  }

  ngOnInit() {
  }

  isLocalStorageSupported() {
    return typeof(Storage) !== 'undefined';
  }
}
