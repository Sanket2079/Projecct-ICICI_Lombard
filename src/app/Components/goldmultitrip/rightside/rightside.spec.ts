import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rightside } from './rightside';

describe('Rightside', () => {
  let component: Rightside;
  let fixture: ComponentFixture<Rightside>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rightside],
    }).compileComponents();

    fixture = TestBed.createComponent(Rightside);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
