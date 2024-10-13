import { Component, Input } from '@angular/core';
import { VacationHistory } from '../../interfaces';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-vacation-history-card',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './vacation-history-card.component.html',
  styleUrl: './vacation-history-card.component.css',
})
export class VacationHistoryCardComponent {
  @Input({ required: true }) vacationHistory!: VacationHistory;
}
