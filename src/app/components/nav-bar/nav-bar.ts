import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  imports: [CommonModule],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar {
  interviewSlots = [
    { slotId: 1, interviewerName: 'Kasun Kalhara', startTime: '2026-03-10T09:00:00', endTime: '2026-03-10T10:00:00', isAvailable: true, status: 'AVAILABLE' },
    { slotId: 2, interviewerName: 'Nishantha Silva', startTime: '2026-03-11T14:00:00', endTime: '2026-03-11T15:00:00', isAvailable: false, status: 'BOOKED' },
    { slotId: 3, interviewerName: 'Saman Kumara', startTime: '2026-03-12T10:00:00', endTime: '2026-03-12T11:00:00', isAvailable: true, status: 'AVAILABLE' },
    { slotId: 4, interviewerName: 'Kasun Kalhara', startTime: '2026-03-15T13:00:00', endTime: '2026-03-15T14:00:00', isAvailable: true, status: 'AVAILABLE' }
  ];
}
