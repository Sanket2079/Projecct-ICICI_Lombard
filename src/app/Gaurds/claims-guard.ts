import { inject } from '@angular/core';
import { CanActivateChildFn } from '@angular/router';
import { AuthService } from '../Services/auth-service';

export const claimsGuard: CanActivateChildFn = (childRoute, state) => {
  
  // const authService = inject(AuthService);
  // return (authService.isAdmin == true )? true : false;
  return true
};
