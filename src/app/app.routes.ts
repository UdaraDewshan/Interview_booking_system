import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { BookedHistory } from './components/booked-history/booked-history';


export const routes: Routes = [
    { 
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full' 
    },
    {   path: 'dashboard',
        component: Dashboard 
    },
    {   path: 'booked',
        component: BookedHistory
    }
];