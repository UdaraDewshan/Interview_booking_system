import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from "./components/nav-bar/nav-bar";
import { Dashboard } from "./pages/dashboard/dashboard";


@Component({
  selector: 'app-root',
  imports: [NavBar, Dashboard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('booking_system');
}
