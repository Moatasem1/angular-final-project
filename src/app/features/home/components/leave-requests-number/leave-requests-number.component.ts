import { Component, Input } from '@angular/core';
import { ILeaveRequest } from '../../interfaces';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-leave-requests-number',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './leave-requests-number.component.html',
  styleUrl: './leave-requests-number.component.css',
})
export class LeaveRequestsNumberComponent {
  @Input({ required: true }) leaveRequestData!: ILeaveRequest;
}
