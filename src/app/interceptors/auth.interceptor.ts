import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  let clonedReq = req;

  if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
    const token = localStorage.getItem('token');
    if (token) {
      clonedReq = req.clone({
        setHeaders: { Authorization: `Bearer ${token}` }
      });
    }
  }

  return next(clonedReq).pipe(
    catchError((error: HttpErrorResponse) => {
      
      if (error.status === 401 || error.status === 403) {

        if (typeof localStorage !== 'undefined') {
          localStorage.removeItem('token');
        }
        router.navigate(['/login']);
      }
      
      return throwError(() => error);
    })
  );
};