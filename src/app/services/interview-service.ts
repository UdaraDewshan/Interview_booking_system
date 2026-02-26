import { Injectable } from '@angular/core';


export interface InterviewSlot{
  slotId: number;
  interviewerId: number;
  interviewerName: string;
  startTTime: string;
  endTime: string;
  isAvailable: boolean;
  ststus: string;
}


@Injectable({
  providedIn: 'root',
})

export class InterviewService {
  
}
