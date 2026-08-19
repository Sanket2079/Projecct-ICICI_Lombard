import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelInsurance } from './travel-insurance';

describe('TravelInsurance', () => {
  let component: TravelInsurance;
  let fixture: ComponentFixture<TravelInsurance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TravelInsurance],
    }).compileComponents();

    fixture = TestBed.createComponent(TravelInsurance);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
