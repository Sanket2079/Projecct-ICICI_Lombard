import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarineInsurance } from './marine-insurance';

describe('MarineInsurance', () => {
  let component: MarineInsurance;
  let fixture: ComponentFixture<MarineInsurance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarineInsurance]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarineInsurance);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
