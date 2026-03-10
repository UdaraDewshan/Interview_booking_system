import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  constructor(private router: Router) {}

  onLogin() {
    localStorage.setItem('token', 'interview-sync-mock-token');
    
    this.router.navigate(['/dashboard']);
  }
}
