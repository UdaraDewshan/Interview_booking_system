# 🚀 InterviewSync - Interview Booking System (Frontend)

Welcome to the frontend repository of **InterviewSync**! This is a modern, responsive, and user-friendly web application built with Angular and Tailwind CSS to manage interview slots and bookings efficiently. 

This frontend is designed to seamlessly integrate with a Spring Boot REST API backend.

## ✨ Features Implemented

* **🎛️ Interactive Dashboard (Available Slots):** * Fetches and displays all currently available interview slots from the backend.
    * Modern card-based UI with clear details (Interviewer name, date, and time).
* **📅 Seamless Booking Mechanism:** * Users can book an available slot with a single click.
    * Auto-updates the UI dynamically using Angular's Change Detection (booked slots disappear instantly).
* **📜 Booking History Page:** * A dedicated page to view all confirmed and past bookings.
    * Distinctive UI styling (Red 'BOOKED' badges and disabled buttons) to differentiate from available slots.
* **➕ Create New Slot (Modal Form):** * A sleek, modern pop-up modal to add new interview slots to the system.
    * Auto-fills the current date and time for faster data entry.
* **🧭 Modern Navigation & Routing:** * Smooth, SPA (Single Page Application) navigation using Angular Router without page reloads.

## 🛠️ Technology Stack

* **Framework:** Angular (Standalone Components, Modern Control Flow `@if`, `@for`)
* **Styling:** Tailwind CSS
* **Language:** TypeScript / HTML / CSS
* **HTTP Client:** RxJS Observables with Angular `HttpClient`

## ⚙️ Prerequisites

Before you begin, ensure you have met the following requirements:
* You have installed the latest version of [Node.js](https://nodejs.org/en/) and NPM.
* You have installed the [Angular CLI](https://angular.io/cli) globally (`npm install -g @angular/cli`).

## 🚀 Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/interview-sync-frontend.git](https://github.com/your-username/interview-sync-frontend.git)
    cd interview-sync-frontend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    ng serve
    ```
4.  **View the App:** Open your browser and navigate to `http://localhost:4200/`.

## 🔌 API Integration Details

This frontend is configured to communicate with a Spring Boot Backend. Ensure your backend is running on `http://localhost:8080` (or update the `baseUrl` in the `interview-service.ts` file).

**Key Endpoints Used:**
* `GET /slot/available` - Fetch all available slots
* `GET /slot/booked` - Fetch all booked slots
* `POST /booking/add` - Create a new booking
* `POST /slot/add` - Create a new interview slot

---
*Built with Udara Dewshan*
