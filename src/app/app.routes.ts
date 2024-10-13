import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ProfileComponent } from './features/profile/profile.component';
import { VacationRequestsComponent } from './features/vacation-requests/vacation-requests.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'profiles', component: ProfileComponent },
  { path: 'vacation-requests', component: VacationRequestsComponent },
  { path: '**', component: HomeComponent },
];
