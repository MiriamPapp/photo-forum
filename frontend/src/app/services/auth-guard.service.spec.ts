import { TestBed } from '@angular/core/testing';
import { AuthGuardService } from './auth-guard.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AwssessionService } from './awssession.service';

class MockRouter {
  navigate(path) { }
}

describe('AuthGuardService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuardService,
        { provide: Router, useClass: MockRouter },
      ]
    });
  });

  it('should be created', () => {
    const service: AuthGuardService = TestBed.get(AuthGuardService);
    expect(service).toBeTruthy();
  });

  it('should return canActivate=true when logged in', () => {
    const fakesession = {isLoggedIn: () =>  true}; 
    const authguard = new AuthGuardService(
      new MockRouter() as Router, fakesession as AwssessionService);
    expect(authguard.canActivate(
      {} as ActivatedRouteSnapshot, {} as RouterStateSnapshot)).toBe(true);
  });

  it('should return canActivate=false when not logged in', () => {
    const fakesession = {isLoggedIn: () =>  false}; 
    const authguard = new AuthGuardService(
      new MockRouter() as Router, fakesession as AwssessionService);
      expect(authguard.canActivate(
      {} as ActivatedRouteSnapshot, {} as RouterStateSnapshot)).toBe(false);
  });

});
