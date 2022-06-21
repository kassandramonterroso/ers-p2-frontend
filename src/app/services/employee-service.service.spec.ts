import { TestBed } from '@angular/core/testing';

import { EmployeeServiceService } from './employee-service.service';

describe('EmployeeServiceService', () => {
  let service: EmployeeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
   it('should return correct url', () => {
    expect(service.baseUrl).toBe('http://localhost:7474/');
  });
  
});
