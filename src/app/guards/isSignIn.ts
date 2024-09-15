import { CanActivateFn, Router } from '@angular/router';

import { AuthService } from '../service/auth.service';
import { inject } from '@angular/core';

export const isSignIn: CanActivateFn = (route, state) => {
  const service = inject(AuthService);
  if (!service.isLoggedIn()) {
    inject(Router).navigateByUrl('auth');
  }
  return true;
};
