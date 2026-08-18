import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikePolicyRenewal } from './bike-policy-renewal';

describe('BikePolicyRenewal', () => {
  let component: BikePolicyRenewal;
  let fixture: ComponentFixture<BikePolicyRenewal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BikePolicyRenewal],
    }).compileComponents();

    fixture = TestBed.createComponent(BikePolicyRenewal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
