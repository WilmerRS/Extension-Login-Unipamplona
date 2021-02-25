import { TestBed } from '@angular/core/testing';

import { PasswordDecodeService } from './password-decode.service';

describe('PasswordDecodeService', () => {
  let service: PasswordDecodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PasswordDecodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
