import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateFooter } from './corporate-footer';

describe('CorporateFooter', () => {
  let component: CorporateFooter;
  let fixture: ComponentFixture<CorporateFooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorporateFooter],
    }).compileComponents();

    fixture = TestBed.createComponent(CorporateFooter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
