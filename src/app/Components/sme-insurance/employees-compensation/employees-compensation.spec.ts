import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesCompensation } from './employees-compensation';

describe('EmployeesCompensation', () => {
  let component: EmployeesCompensation;
  let fixture: ComponentFixture<EmployeesCompensation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeesCompensation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeesCompensation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
