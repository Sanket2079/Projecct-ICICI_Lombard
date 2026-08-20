import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthClaimsComp } from './health-claims-comp';

describe('HealthClaimsComp', () => {
  let component: HealthClaimsComp;
  let fixture: ComponentFixture<HealthClaimsComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HealthClaimsComp],
    }).compileComponents();

    fixture = TestBed.createComponent(HealthClaimsComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
