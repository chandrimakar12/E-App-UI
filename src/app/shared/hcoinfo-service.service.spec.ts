import { TestBed } from '@angular/core/testing';

import { HcoinfoServiceService } from './hcoinfo-service.service';

describe('HcoinfoServiceService', () => {
  let service: HcoinfoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HcoinfoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
