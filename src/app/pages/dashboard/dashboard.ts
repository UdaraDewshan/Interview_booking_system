import { CommonModule } from '@angular/common';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core'; // ChangeDetectorRef අලුතෙන් ගත්තා
import { InterviewService, InterviewSlot } from '../../services/interview-service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {

  interviewSlots: InterviewSlot[] = [];

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
        console.log("slots loading succesfully", data);
        
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
}