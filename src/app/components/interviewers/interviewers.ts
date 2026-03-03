import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Interviewer, InterviewService } from '../../services/interview-service';

@Component({
  selector: 'app-interviewers',
  imports: [CommonModule,FormsModule],
  templateUrl: './interviewers.html',
  styleUrl: './interviewers.css',
})
export class Interviewers implements OnInit{

  interviewersList: Interviewer[] = [];
  isModalOpen = false;

  newInterviewer: Interviewer = {
    name: '',
    email: '',
    specialization: ''
  };

  constructor(private interviewService: InterviewService, private cdr: ChangeDetectorRef){}

  ngOnInit(): void {
    this.loadInterviewers();
  }

  loadInterviewers() {
    this.interviewService.getInterviewers().subscribe({
      next: (data) => {
        this.interviewersList = data;
        this.cdr.detectChanges();
      },
      error: (err) => console.error("Error loading interviewers:", err)
    });
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.newInterviewer = { name: '', email: '', specialization: '' };
  }

  saveInterviewer() {
    this.interviewService.addInterviewew(this.newInterviewer).subscribe({
      next: (res) => {
        alert('New Interviewer Added Successfully!');
        this.closeModal();
        this.loadInterviewers(); 
      },
      error: (err) => {
        console.error("Error adding interviewer:", err);
        alert('Failed to add interviewer.');
      }
    });
  }


}
