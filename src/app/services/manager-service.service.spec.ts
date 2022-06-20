import { TestBed } from '@angular/core/testing';

import { ManagerServiceService } from './manager-service.service';

describe('ManagerServiceService', () => {
  let service: ManagerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it(`should return correct url`, () => {
    expect(service.baseUrl).toBe('http://localhost:7474');
  });
  
});
