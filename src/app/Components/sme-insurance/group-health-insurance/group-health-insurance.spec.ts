import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupHealthInsurance } from './group-health-insurance';

describe('GroupHealthInsurance', () => {
  let component: GroupHealthInsurance;
  let fixture: ComponentFixture<GroupHealthInsurance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupHealthInsurance]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupHealthInsurance);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
