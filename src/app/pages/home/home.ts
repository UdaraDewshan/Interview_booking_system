import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavBar } from "../../components/nav-bar/nav-bar";

@Component({
  selector: 'app-home',
  imports: [CommonModule, NavBar],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  
}
