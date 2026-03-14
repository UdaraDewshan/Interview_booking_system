import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html'
})
export class LoginComponent {

  email = '';
  password = '';

  constructor(private router: Router, private http: HttpClient) {}

  onLogin() {
    const loginData = {
      email: this.email,
      password: this.password
    };

    this.http.post('http://localhost:8080/api/auth/login', loginData).subscribe({
      next: (res: any) => {
        localStorage.setItem('token', res.token);
        
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        alert('Invalid email or password! Please try again.');
        console.error('Login Error:', err);
      }
    });
  }
}