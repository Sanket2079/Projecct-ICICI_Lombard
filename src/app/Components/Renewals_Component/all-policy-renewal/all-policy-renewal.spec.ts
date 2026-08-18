import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPolicyRenewal } from './all-policy-renewal';

describe('AllPolicyRenewal', () => {
  let component: AllPolicyRenewal;
  let fixture: ComponentFixture<AllPolicyRenewal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllPolicyRenewal],
    }).compileComponents();

    fixture = TestBed.createComponent(AllPolicyRenewal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
