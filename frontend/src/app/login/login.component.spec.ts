import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { AwssessionService } from '../services/awssession.service';
import { Router } from '@angular/router';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, RouterTestingModule.withRoutes([])],
      declarations: [ LoginComponent ],
      providers: [
        Location,
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set notLoggedIn state to false when logged in', () => {
    spyOn(AwssessionService.prototype, 'setKeys').and.returnValue(Promise.resolve(true));
    spyOn(AwssessionService.prototype, 'isLoggedIn').and.returnValue(true);
    component.onSubmit().then( () => {
      expect(component.notLoggedIn).toEqual(false);
    });
  });

  it('should set notLoggedIn state to true when not logged in', () => {
    spyOn(AwssessionService.prototype, 'setKeys').and.returnValue(Promise.resolve(false));
    spyOn(AwssessionService.prototype, 'isLoggedIn').and.returnValue(false);
    component.onSubmit().then( () => {
      expect(component.notLoggedIn).toEqual(true);
    });
  });

  it('should redirect to / when logged in', () => {
    spyOn(AwssessionService.prototype, 'setKeys').and.returnValue(Promise.resolve(true));
    spyOn(AwssessionService.prototype, 'isLoggedIn').and.returnValue(true);
    const routerSpy = spyOn(Router.prototype, 'navigate');
   
    component.onSubmit().then( () => {
      expect(component.notLoggedIn).toEqual(false);
      expect(routerSpy).toHaveBeenCalledWith(['/']);
      expect(routerSpy).toHaveBeenCalledTimes(1);
    });
  });

});
