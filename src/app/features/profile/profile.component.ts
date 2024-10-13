import { Component } from '@angular/core';
import { ProfileEmployeeDetailsComponent } from './components/profile-employee-details/profile-employee-details.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ProfileEmployeeDetailsComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {}
