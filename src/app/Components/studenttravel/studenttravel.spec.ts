import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Studenttravel } from './studenttravel';

describe('Studenttravel', () => {
  let component: Studenttravel;
  let fixture: ComponentFixture<Studenttravel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Studenttravel],
    }).compileComponents();

    fixture = TestBed.createComponent(Studenttravel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
