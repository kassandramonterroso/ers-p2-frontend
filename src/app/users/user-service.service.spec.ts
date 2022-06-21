import { TestBed } from '@angular/core/testing';

import { UserServiceService } from './user-service.service';

describe('UserServiceService', () => {
  let service: UserServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
   it('should return correct url', () => {
    expect(service.url).toBe('http://localhost:7474/');
  });
  
});
