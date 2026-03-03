import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Interviewers } from './interviewers';

describe('Interviewers', () => {
  let component: Interviewers;
  let fixture: ComponentFixture<Interviewers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Interviewers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Interviewers);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
