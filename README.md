# 🚀 InterviewSync | Enterprise Interview Scheduling Platform (Frontend)

![Angular](https://img.shields.io/badge/Angular-17+-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![JWT Security](https://img.shields.io/badge/JWT_Secured-black?style=for-the-badge&logo=JSON%20web%20tokens)

Welcome to the frontend repository of **InterviewSync**! This is a modern, highly secure, and responsive web application engineered to streamline the interview scheduling process for enterprise HR teams. Built with the latest Angular standalone components and beautifully styled with Tailwind CSS.

This frontend serves as the interactive client for the robust **Spring Boot REST API** backend, featuring advanced state management and secure token-based authentication.

---

## ✨ Enterprise-Grade Features

### 🔐 Robust Security & Authentication
* **JWT Integration:** Fully secured HTTP communication using JSON Web Tokens (JWT) via Angular `HttpInterceptors`.
* **Route Protection:** Implemented Angular `CanActivate` Guards to protect internal dashboards and prevent unauthorized access.
* **Smart Session Management:** Secure local storage handling with automatic logouts and token validation.

### 📅 Advanced Scheduling Algorithms
* **Real-time Conflict Detection:** Prevents overlapping time slots for the same interviewer, ensuring a clash-free schedule.
* **Dynamic Time Validation:** Auto-expires and hides past interview slots to keep the dashboard clutter-free and relevant.
* **Interactive Dashboard:** Modern card-based UI that auto-updates dynamically using Angular's Change Detection.

### ⚡ Seamless User Experience (UX)
* **One-Click Booking:** Streamlined mechanism to book available slots instantly.
* **Booking History & Analytics:** Dedicated views to track past and confirmed bookings with distinctive status badges.
* **Smart Modals:** Sleek pop-up forms for data entry, featuring auto-filled dates and times for maximum efficiency.
* **SPA Navigation:** Smooth, zero-reload transitions utilizing the Angular Router.

---

## 🛠️ Technology Stack

* **Core Framework:** Angular (Standalone Components, Modern `@if`/`@for` Control Flow)
* **Styling & UI:** Tailwind CSS (Custom themes, animations, and responsive design)
* **Language:** TypeScript
* **State & HTTP:** RxJS Observables, Angular `HttpClient`, Custom HTTP Interceptors

---

## ⚙️ Quick Start Guide

### Prerequisites
Ensure you have the following installed:
* **Node.js** (v18+) and **NPM**
* **Angular CLI** (`npm install -g @angular/cli`)
