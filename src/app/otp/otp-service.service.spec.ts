import { TestBed, inject } from '@angular/core/testing';

import { OtpServiceService } from './otp-service.service';

describe('OtpServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OtpServiceService]
    });
  });

  it('should be created', inject([OtpServiceService], (service: OtpServiceService) => {
    expect(service).toBeTruthy();
  }));
});
