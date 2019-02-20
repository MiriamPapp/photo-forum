import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  accesskey: string = 'ak';
  secretkey: string = 'sk';
  
  notLoggedIn = true;

  onSubmit() {
    this.notLoggedIn = false;
  }

  constructor() { }

  ngOnInit() {
  }

}
