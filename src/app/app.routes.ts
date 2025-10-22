import { Routes } from '@angular/router';
import { HomePage } from './home/home.page';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'song-details/:title', // The correct Route path
    loadComponent: () =>
      import('./pages/song-details/song-details.page').then(
        (m) => m.SongDetailsPage
      ),
  },
];