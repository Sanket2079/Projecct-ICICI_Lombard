import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateLayout } from './corporate-layout';

describe('CorporateLayout', () => {
  let component: CorporateLayout;
  let fixture: ComponentFixture<CorporateLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorporateLayout],
    }).compileComponents();

    fixture = TestBed.createComponent(CorporateLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
