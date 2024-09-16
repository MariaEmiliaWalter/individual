import { Routes } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';
import { isSignIn } from './guards/isSignIn';

export const routes: Routes = [
  {
    path: 'auth',
    loadComponent: () => import('./auth/auth.page').then(m => m.AuthPage)
  },
  {
    path: 'register',
    loadComponent: () => import('./auth/register/register.page').then( m => m.RegisterPage)
  },
  {
    path: '',
    canActivate: [isSignIn],
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  }
];