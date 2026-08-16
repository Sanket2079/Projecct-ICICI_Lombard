import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmeInsurance } from './sme-insurance';

describe('SmeInsurance', () => {
  let component: SmeInsurance;
  let fixture: ComponentFixture<SmeInsurance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmeInsurance],
    }).compileComponents();

    fixture = TestBed.createComponent(SmeInsurance);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
