import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { claimsGuard } from './claims-guard';

describe('claimsGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => claimsGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
