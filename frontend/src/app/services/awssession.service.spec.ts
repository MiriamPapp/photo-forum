import { TestBed } from '@angular/core/testing';

import { AwssessionService } from './awssession.service';

describe('AwssessionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AwssessionService = TestBed.get(AwssessionService);
    expect(service).toBeTruthy();
  });
});
