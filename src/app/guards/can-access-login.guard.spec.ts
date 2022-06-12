import { TestBed } from '@angular/core/testing';

import { CanAccessLoginGuard } from './can-access-login.guard';

describe('CanAccessLoginGuard', () => {
  let guard: CanAccessLoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanAccessLoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
