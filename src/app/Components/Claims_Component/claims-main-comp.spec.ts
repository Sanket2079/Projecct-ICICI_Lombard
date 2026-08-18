import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimsMainComp } from './claims-main-comp';

describe('ClaimsMainComp', () => {
  let component: ClaimsMainComp;
  let fixture: ComponentFixture<ClaimsMainComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClaimsMainComp],
    }).compileComponents();

    fixture = TestBed.createComponent(ClaimsMainComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
