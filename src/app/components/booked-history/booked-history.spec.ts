import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookedHistory } from './booked-history';

describe('BookedHistory', () => {
  let component: BookedHistory;
  let fixture: ComponentFixture<BookedHistory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookedHistory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookedHistory);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
