import { CommonModule } from '@angular/common';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { InterviewService, InterviewSlot } from '../../services/interview-service';

@Component({
  selector: 'app-booked-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './booked-history.html'
})
export class BookedHistory implements OnInit {

  bookedSlots: InterviewSlot[] = [];

  constructor(
    private interviewService: InterviewService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadBookedSlots();
  }

  loadBookedSlots() {
    this.interviewService.getBookedSlots().subscribe({
      next: (data) => {
        this.bookedSlots = data;
        this.cdr.detectChanges();
      },
      error: (err) => console.error("Error loading booked slots:", err)
    });
  }
}