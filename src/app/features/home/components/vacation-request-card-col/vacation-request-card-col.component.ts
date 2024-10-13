import { Component, EventEmitter, Input, Output } from '@angular/core';
import { VacationRequests } from '../../../../shared/interfaces';
import { DatePipe } from '@angular/common';
import { HighlightPipe } from '../../pipes/highlight.pipe';

@Component({
  selector: 'app-vacation-request-card-col',
  standalone: true,
  imports: [DatePipe, HighlightPipe],
  templateUrl: './vacation-request-card-col.component.html',
  styleUrl: './vacation-request-card-col.component.css',
})
export class VacationRequestCardColComponent {
  @Input({ required: true }) vacationRequest!: VacationRequests;
  @Output() vacationApproved = new EventEmitter<string>();
  @Output() vacationDecline = new EventEmitter<string>();
  @Input() searchQuery = '';

  approve() {
    this.vacationApproved.emit(this.vacationRequest.id);
  }
  decline() {
    this.vacationDecline.emit(this.vacationRequest.id);
  }
}
