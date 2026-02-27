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

  bookSlot(slot: InterviewSlot): Observable<any> {
    
    const bookingPayload = {
      slotId: slot.slotId,
      candidateId: 1, 
      candidateName: "Udara Dewshan", 
      interviewerName: slot.interviewerName,
      startTime: slot.startTime,
      endTime: slot.endTime,
      status: "BOOKED"
    };

    return this.http.post(`${this.baseUrl}/booking/add`, bookingPayload); 
  }

  getBookedSlots(): Observable<InterviewSlot[]> {
    return this.http.get<InterviewSlot[]>(`${this.baseUrl}/slot/booked`);
  }

  addSlot(slotData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/slot/add`, slotData, { responseType: 'text' });
  }

}
  