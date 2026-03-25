import { CommonModule } from '@angular/common';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InterviewService, InterviewSlot } from '../../services/interview-service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {

  interviewSlots: InterviewSlot[] = [];

  isModalOpen = false;

  newSlot = {
    interviewerId: null,
    startTime: '',
    endTime: ''
  };

  constructor(
    private interviewService: InterviewService,
    private cdr: ChangeDetectorRef 
  ){}

  ngOnInit(): void {
    this.loadSlots();
  }

  loadSlots() {
    this.interviewService.getAvailableSlots().subscribe({
      next: (data) => {
        this.interviewSlots = data;
        this.cdr.detectChanges(); 
      },
      error: (err) => {
        console.error("Error loading slots:", err);
      }
    });
  }

  isBookingModalOpen = false;
  selectedSlotForBooking: any = null;
  candidateIdForBooking: number | null = null;

  openBookingModal(slot: InterviewSlot) {
    this.selectedSlotForBooking = slot;
    this.isBookingModalOpen = true;
  }

  closeBookingModal() {
    this.isBookingModalOpen = false;
    this.selectedSlotForBooking = null;
    this.candidateIdForBooking = null;
  }
confirmBooking() {
    if (!this.selectedSlotForBooking || !this.candidateIdForBooking) return;

    console.log("Selected Slot Data:", this.selectedSlotForBooking);

    const bookingRequest = {
      slotId: this.selectedSlotForBooking.id || this.selectedSlotForBooking.slotId, 
      candidateId: this.candidateIdForBooking
    };

    console.log("Sending Request to Backend:", bookingRequest);

    this.interviewService.bookSlot(bookingRequest).subscribe({
      next: (response) => {
        alert('Appointment Booked Successfully!');
        this.closeBookingModal();
        this.loadSlots();
      },
      error: (err) => {
        console.error("Booking Error:", err);
        alert('Failed to book the appointment. Please check the Candidate ID.');
      }
    });
  }
  openModal() {
    this.isModalOpen = true;

    const now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    const currentDateTime = now.toISOString().slice(0, 16); 

    this.newSlot.startTime = currentDateTime;
    this.newSlot.endTime = currentDateTime;
  }

  closeModal() {
    this.isModalOpen = false;
    this.newSlot = { interviewerId: null, startTime: '', endTime: '' };
  }

  saveNewSlot() {
    const formattedSlot = {
      interviewerId: this.newSlot.interviewerId,
      startTime: this.newSlot.startTime.length === 16 ? this.newSlot.startTime + ':00' : this.newSlot.startTime,
      endTime: this.newSlot.endTime.length === 16 ? this.newSlot.endTime + ':00' : this.newSlot.endTime
    };

    this.interviewService.addSlot(formattedSlot).subscribe({
      next: (res) => {
        alert('New Interview Slot Created!');
        this.closeModal(); 
        this.loadSlots(); 
      },
      error: (err) => {
        console.error("Error creating slot:", err);
        alert('Failed to create slot. Please check the Interviewer ID.');
      }
    });
  }
}