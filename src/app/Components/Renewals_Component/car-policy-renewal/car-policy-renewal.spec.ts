import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarPolicyRenewal } from './car-policy-renewal';

describe('CarPolicyRenewal', () => {
  let component: CarPolicyRenewal;
  let fixture: ComponentFixture<CarPolicyRenewal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarPolicyRenewal],
    }).compileComponents();

    fixture = TestBed.createComponent(CarPolicyRenewal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
