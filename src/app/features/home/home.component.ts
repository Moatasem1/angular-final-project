import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { HomeEmployeeDetailsComponent } from './home-employee-details/home-employee-details.component';
import { LeaveRequestsNumberComponent } from './leave-requests-number/leave-requests-number.component';
import { ILeaveRequest } from './interfaces';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';
import { LatestNewsComponent } from './latest-news/latest-news.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HomeEmployeeDetailsComponent,
    LeaveRequestsNumberComponent,
    LatestNewsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  user: UserService = inject(UserService);
  leaveRequestData: ILeaveRequest[] = [];
  constructor() {}

  ngOnInit(): void {
    this.leaveRequestData = [
      {
        icon: faListCheck,
        label: 'vacation requests',
        value: this.user.vacationRequestNumber,
      },
      {
        icon: faListCheck,
        label: 'leave requests',
        value: this.user.leaveRequestNumber,
      },
    ];
  }
}
