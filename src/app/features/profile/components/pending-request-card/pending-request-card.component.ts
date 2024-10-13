import { Component, inject, Input } from '@angular/core';
import { PendingRequest } from '../../interfaces';
import { UserService } from '../../../../core/services/user.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-pending-request-card',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './pending-request-card.component.html',
  styleUrl: './pending-request-card.component.css',
})
export class PendingRequestCardComponent {
  @Input({ required: true }) pendingRequest!: PendingRequest;
  user = inject(UserService);
}
