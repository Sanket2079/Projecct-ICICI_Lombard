import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateProducts } from './corporate-products';

describe('CorporateProducts', () => {
  let component: CorporateProducts;
  let fixture: ComponentFixture<CorporateProducts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorporateProducts],
    }).compileComponents();

    fixture = TestBed.createComponent(CorporateProducts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
