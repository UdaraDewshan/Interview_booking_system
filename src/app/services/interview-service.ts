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

@Injectable({
  providedIn: 'root',
})
export class InterviewService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient){}

  getAvailableSlots() : Observable<InterviewSlot[]> {
    return this.http.get<InterviewSlot[]>(`${this.baseUrl}/slot/available`);
  }
}