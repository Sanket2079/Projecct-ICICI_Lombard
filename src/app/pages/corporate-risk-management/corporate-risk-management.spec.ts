import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateRiskManagement } from './corporate-risk-management';

describe('CorporateRiskManagement', () => {
  let component: CorporateRiskManagement;
  let fixture: ComponentFixture<CorporateRiskManagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorporateRiskManagement],
    }).compileComponents();

    fixture = TestBed.createComponent(CorporateRiskManagement);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
