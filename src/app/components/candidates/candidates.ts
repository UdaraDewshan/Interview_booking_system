import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { InterviewService, Candidate } from '../../services/interview-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-candidates',
  imports: [CommonModule,FormsModule],
  templateUrl: './candidates.html',
  styleUrl: './candidates.css',
})
export class Candidates implements OnInit{

  candidateList: Candidate[] = [];
  isModelOpen = false;

  newCandidate: Candidate = {
    name: '',
    email: '',
    contactNo: ''
  };

  constructor(private interviewService: InterviewService, private cdr: ChangeDetectorRef){}
  
  ngOnInit(): void {
    this.loadCandidates();
  }

  loadCandidates(){
    this.interviewService.getCandidates().subscribe({
      next: (data) => {
        this.candidateList = data;
        this.cdr.detectChanges();
      },
      error: (err) => console.error("error loading candidate",err)
    });
  }

  openModel(){
    this.isModelOpen = true;
  }

  closeModel(){
    this.isModelOpen = false;
    this.newCandidate = {name: '', email: '', contactNo: ''};
  }

  saveCandidate(){
    this.interviewService.addCandidate(this.newCandidate).subscribe({
      next: (res) => {
        alert('Candidate Added Successfully!');
        this.closeModel();
        this.loadCandidates();
      },
      error: (err) => {
        console.error("Error adding candidate:", err);
        alert('Failed to add candidate. Please try again.');
      }
    });
  }
  
}
