import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { BookedHistory } from './components/booked-history/booked-history';
import { Candidates } from './components/candidates/candidates';
import { Interviewers } from './components/interviewers/interviewers';
import { Login } from './components/login/login';


export const routes: Routes = [
    {   path: '', 
        redirectTo: 'login', 
        pathMatch: 'full' 
    }, 
    {   path: 'login',
        component: Login 
    },
    {   path: 'dashboard',
        component: Dashboard 
    },
    {   path: 'booked',
        component: BookedHistory
    },
    {   path: 'candidates',
        component: Candidates 
    },
    {
        path: 'interviewers',
        component: Interviewers
    }
];