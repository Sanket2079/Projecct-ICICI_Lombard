import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmeDropdown } from './sme-dropdown';

describe('SmeDropdown', () => {
  let component: SmeDropdown;
  let fixture: ComponentFixture<SmeDropdown>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmeDropdown],
    }).compileComponents();

    fixture = TestBed.createComponent(SmeDropdown);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
