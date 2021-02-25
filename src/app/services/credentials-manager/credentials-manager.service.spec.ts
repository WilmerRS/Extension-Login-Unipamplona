import { TestBed } from '@angular/core/testing';

import { CredentialsManagerService } from './credentials-manager.service';

describe('CredentialsManagerService', () => {
  let service: CredentialsManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CredentialsManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
