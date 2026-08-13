import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Goldmultitrip } from './goldmultitrip';

describe('Goldmultitrip', () => {
  let component: Goldmultitrip;
  let fixture: ComponentFixture<Goldmultitrip>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Goldmultitrip],
    }).compileComponents();

    fixture = TestBed.createComponent(Goldmultitrip);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
