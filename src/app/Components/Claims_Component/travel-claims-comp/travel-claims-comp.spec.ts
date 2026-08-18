import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelClaimsComp } from './travel-claims-comp';

describe('TravelClaimsComp', () => {
  let component: TravelClaimsComp;
  let fixture: ComponentFixture<TravelClaimsComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TravelClaimsComp],
    }).compileComponents();

    fixture = TestBed.createComponent(TravelClaimsComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
