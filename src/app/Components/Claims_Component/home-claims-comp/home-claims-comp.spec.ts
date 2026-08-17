import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeClaimsComp } from './home-claims-comp';

describe('HomeClaimsComp', () => {
  let component: HomeClaimsComp;
  let fixture: ComponentFixture<HomeClaimsComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeClaimsComp],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeClaimsComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
