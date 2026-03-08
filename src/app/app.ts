import { Component, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NavBar } from "./components/nav-bar/nav-bar";
import { Dashboard } from "./pages/dashboard/dashboard";


@Component({
  selector: 'app-root',
  imports: [NavBar,RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('booking_system');
  showNavBar = true;

  constructor(private router: Router){
    this.router.events.subscribe((event) => {
        if(event instanceof NavigationEnd){
          this.showNavBar =!(event.url === '/login' || event.url  === '/');
        }
    });
  }


}
