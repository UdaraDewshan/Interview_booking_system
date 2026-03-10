import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { BookedHistory } from './components/booked-history/booked-history';
import { Candidates } from './components/candidates/candidates';
import { Interviewers } from './components/interviewers/interviewers';
import { Login } from './components/login/login';
import { authGuard } from './guards/auth-guard';


export const routes: Routes = [
    {   path: '', 
        redirectTo: 'login', 
        pathMatch: 'full' 
    }, 
    {   path: 'login',
        component: Login,
    },
    {   path: 'dashboard',
        component: Dashboard,
        canActivate: [authGuard]
    },
    {   path: 'booked',
        component: BookedHistory,
        canActivate: [authGuard]
    },
    {   path: 'candidates',
        component: Candidates,
        canActivate: [authGuard]
    },
    {
        path: 'interviewers',
        component: Interviewers,
        canActivate: [authGuard]
    }
];