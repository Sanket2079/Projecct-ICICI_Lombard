import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateHeader } from './corporate-header';

describe('CorporateHeader', () => {
  let component: CorporateHeader;
  let fixture: ComponentFixture<CorporateHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorporateHeader],
    }).compileComponents();

    fixture = TestBed.createComponent(CorporateHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
