import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatisTravelInsurance } from './whatis-travel-insurance';

describe('WhatisTravelInsurance', () => {
  let component: WhatisTravelInsurance;
  let fixture: ComponentFixture<WhatisTravelInsurance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatisTravelInsurance],
    }).compileComponents();

    fixture = TestBed.createComponent(WhatisTravelInsurance);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
