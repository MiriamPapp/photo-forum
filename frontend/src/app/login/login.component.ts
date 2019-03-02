import { Component, OnInit } from '@angular/core';
import { AwssessionService } from '../services/awssession.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  accesskey: string = '';
  secretkey: string = '';
  
  notLoggedIn = true;

  async onSubmit(): Promise<void> {
    const loggedIn = await this.awsSessionService.setKeys(this.accesskey, this.secretkey);
    if (loggedIn) {
      this.notLoggedIn = false;
      this.router.navigate(['/']);
    }
  }

  constructor(
    private awsSessionService: AwssessionService,
    private router: Router)
    { }

  ngOnInit() {
  }
}
