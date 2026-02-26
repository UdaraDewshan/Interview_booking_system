import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  interviewSlots = [
    { slotId: 1, interviewerName: 'Kamal Perera', startTime: '2026-03-10T09:00:00', endTime: '2026-03-10T10:00:00', isAvailable: true, status: 'AVAILABLE' },
    { slotId: 2, interviewerName: 'Nimal Silva', startTime: '2026-03-11T14:00:00', endTime: '2026-03-11T15:00:00', isAvailable: false, status: 'BOOKED' },
    { slotId: 3, interviewerName: 'Saman Kumara', startTime: '2026-03-12T10:00:00', endTime: '2026-03-12T11:00:00', isAvailable: true, status: 'AVAILABLE' },
    { slotId: 4, interviewerName: 'Kamal Perera', startTime: '2026-03-15T13:00:00', endTime: '2026-03-15T14:00:00', isAvailable: true, status: 'AVAILABLE' }
  ];
}
