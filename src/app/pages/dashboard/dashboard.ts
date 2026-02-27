import { CommonModule } from '@angular/common';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms'; // 1. මේක අලුතෙන් දැම්මා
import { InterviewService, InterviewSlot } from '../../services/interview-service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule], // 2. මෙතනට FormsModule දැම්මා
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

  bookAppointment(slot: InterviewSlot) {
    const isConfirmed = confirm(`Are you sure you want to book the interview with ${slot.interviewerName}?`);
    
    if (isConfirmed) {
      this.interviewService.bookSlot(slot).subscribe({
        next: (response) => {
          alert('Appointment Booked Successfully!');
          
          this.loadSlots(); 
        },
        error: (err) => {
          console.error("Booking Error:", err);
          alert('Failed to book the appointment. Please try again.');
        }
      });
    }
  }

  openModal() {
    this.isModalOpen = true;

    const now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    const currentDateTime = now.toISOString().slice(0, 16); 

    // ඒ වෙලාව අපේ inputs දෙකට සෙට් කරනවා
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