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
  
  notLoggedIn = true;

  async onSubmit(): Promise<void> {
    const loggedIn = await this.awsSessionService.setKeys(this.accesskey, this.secretkey);
    console.log('logged in:', loggedIn);
    if (loggedIn) {
      this.notLoggedIn = false;
      console.log('redirect to overview');
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
