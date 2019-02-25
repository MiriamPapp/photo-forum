import { Component, OnInit } from '@angular/core';
import { AwssessionService } from '../services/awssession.service';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

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
    this.awsSessionService.setKeys(this.accesskey, this.secretkey);
    if (this.awsSessionService.isLoggedIn()) {
      this.router.navigate(['/']);
    }
  }

  constructor(
    private awsSessionService: AwssessionService,
    private router: Router)
    { }

  ngOnInit() {
  }

  isLocalStorageSupported() {
    return typeof(Storage) !== 'undefined';
  }
}
