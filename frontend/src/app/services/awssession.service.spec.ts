import { TestBed } from '@angular/core/testing';

import { AwssessionService } from './awssession.service';
import { throwError } from 'rxjs';

describe('AwssessionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AwssessionService = TestBed.get(AwssessionService);
    expect(service).toBeTruthy();
  });

  it('should return false in isLoggedin when S3 listing fails', () => {
    const s3Spy = jasmine.createSpyObj('S3', ['listObjectsV2']);
    s3Spy.listObjectsV2.and.returnValue(throwError('error'));
    
    const awssessionservice = new AwssessionService();
    expect(awssessionservice.isLoggedIn()).toBe(false);
  });

});
