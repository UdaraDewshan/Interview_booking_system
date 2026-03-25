import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface InterviewSlot {
  slotId: number; 
  interviewerId: number;               
  interviewerName: string;              
  startTime: string;
  endTime: string;
  available: boolean;
  status: string;
}

export interface Candidate {
  id?: number; 
  name: string;
  email: string;
  contactNo: string;
}

export interface Interviewer {
  id?: number;
  name: string;
  email: string;
  specialization: string;
}

@Injectable({
  providedIn: 'root',
})
export class InterviewService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient){}

  getAvailableSlots() : Observable<InterviewSlot[]> {
    return this.http.get<InterviewSlot[]>(`${this.baseUrl}/slot/available`);
  }

  bookSlot(bookingRequest: any) {
    return this.http.post('http://localhost:8080/booking/add', bookingRequest); 
  }

  getBookedSlots(): Observable<InterviewSlot[]> {
    return this.http.get<InterviewSlot[]>(`${this.baseUrl}/slot/booked`);
  }

  addSlot(slotData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/slot/add`, slotData, { responseType: 'text' });
  }

  getCandidates(): Observable<Candidate[]>{
    return this.http.get<Candidate[]>(`${this.baseUrl}/candidate/all`);
  }

  addCandidate(candidateData : Candidate): Observable<any>{
    return this.http.post(`${this.baseUrl}/candidate/add`, candidateData,{
      responseType: 'text'
    });
  }

  getInterviewers(): Observable<Interviewer[]>{
    return this.http.get<Interviewer[]>(`${this.baseUrl}/interviewer/all`);
  }

  addInterviewew(interviewerData: Interviewer): Observable<any>{
    return this.http.post(`${this.baseUrl}/interviewer/add`, interviewerData,{responseType: 'text'});
  }

  
}
  