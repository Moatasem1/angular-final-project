import { Component } from '@angular/core';
import { ProfileEmployeeDetailsComponent } from './components/profile-employee-details/profile-employee-details.component';
import { EmployeeVacationHistoryComponent } from './components/employee-vacation-history/employee-vacation-history.component';
import { PendingRequestsComponent } from './components/pending-requests/pending-requests.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    ProfileEmployeeDetailsComponent,
    EmployeeVacationHistoryComponent,
    PendingRequestsComponent,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {}
