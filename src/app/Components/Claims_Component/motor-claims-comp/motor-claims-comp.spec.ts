import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorClaimsComp } from './motor-claims-comp';

describe('MotorClaimsComp', () => {
  let component: MotorClaimsComp;
  let fixture: ComponentFixture<MotorClaimsComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MotorClaimsComp],
    }).compileComponents();

    fixture = TestBed.createComponent(MotorClaimsComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
