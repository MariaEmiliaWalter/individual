import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./tab-home/tab-home.page').then((m) => m.TabHomePage)
      },
      {
        path: 'profile',
        loadComponent: () => 
          import('./tab-profile/tab-profile.page').then( (m) => m.TabProfilePage)
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
    ],
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];
