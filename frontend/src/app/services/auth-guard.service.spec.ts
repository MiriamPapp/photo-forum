import { TestBed } from '@angular/core/testing';
import { AuthGuardService } from './auth-guard.service';
import { AwssessionService } from './awssession.service';
import { AppRoutingModule } from '../app-routing.module';
import { Router } from '@angular/router';

describe('AuthGuardService', () => {

/*
  beforeEach(() => {
    const loggedInSpy = jasmine.createSpyObj('AwssessionService', ['isLoggedIn']);
    TestBed.configureTestingModule({
      providers: [
        AuthGuardService,
        { provide: AwssessionService, useValue: loggedInSpy }
      ]
    });
    authguardservice = TestBed.get(AuthGuardService);
    awssessionspy = TestBed.get(AwssessionService);
  });

  it('should be created', () => {
    const service: AuthGuardService = TestBed.get(AuthGuardService);
    expect(service).toBeTruthy();
  });

  it('should return canActivate=true when logged in', () => {
    awssessionspy.isLoggedIn.and.returnValue(true);
    expect(authguardservice.canActivate(null,null)).toBe(true);
  });
*/
});
