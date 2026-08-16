import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FireInsurance } from './fire-insurance';

describe('FireInsurance', () => {
  let component: FireInsurance;
  let fixture: ComponentFixture<FireInsurance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FireInsurance]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FireInsurance);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
