import { TestBed } from '@angular/core/testing';

import { SendUrlService } from './send-url.service';

describe('SendUrlService', () => {
  let service: SendUrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendUrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
