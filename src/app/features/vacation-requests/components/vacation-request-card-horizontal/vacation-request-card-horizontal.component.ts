import { Component, EventEmitter, Input, Output } from '@angular/core';
import { VacationRequests } from '../../../../shared/interfaces';
import { DatePipe, NgClass, NgStyle } from '@angular/common';
import { HighlightPipe } from '../../../home/pipes/highlight.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheckCircle as faCheckCircleRegular } from '@fortawesome/free-regular-svg-icons';
import { faCheckCircle as faCheckCircleSolid } from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vacation-request-card-horizontal',
  standalone: true,
  imports: [DatePipe, HighlightPipe, FontAwesomeModule, FormsModule, NgClass],
  templateUrl: './vacation-request-card-horizontal.component.html',
  styleUrl: './vacation-request-card-horizontal.component.css',
})
export class VacationRequestCardHorizontalComponent {
  /**
   * fontawesome icons
   */
  faCheckCircleRegular = faCheckCircleRegular;
  faCheckCircleSolid = faCheckCircleSolid;
  @Input({ required: true }) vacationRequest!: VacationRequests;
  @Input() searchQuery: string = '';
  @Output() selected = new EventEmitter<{ id: string; isChecked: boolean }>();
  @Input() isChecked: boolean = false;
  toggle() {
    this.selected.emit({
      id: this.vacationRequest.id,
      isChecked: this.isChecked,
    });
  }
}
