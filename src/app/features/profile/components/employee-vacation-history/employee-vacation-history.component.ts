import { Component, inject, OnInit } from '@angular/core';
import { CardsPanelComponent } from '../../../../shared/components/cards-panel/cards-panel.component';
import { ICardsPanelHeader } from '../../../../shared/interfaces';
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { VacationHistoryService } from '../../services/vacation-history.service';
import { VacationHistory } from '../../interfaces';
import { VacationHistoryCardComponent } from '../vacation-history-card/vacation-history-card.component';

@Component({
  selector: 'app-employee-vacation-history',
  standalone: true,
  imports: [CardsPanelComponent, VacationHistoryCardComponent],
  templateUrl: './employee-vacation-history.component.html',
  styleUrl: './employee-vacation-history.component.css',
})
export class EmployeeVacationHistoryComponent implements OnInit {
  cardsPanelHeader: ICardsPanelHeader;
  vacationHistoryService = inject(VacationHistoryService);
  vacationsHistory: VacationHistory[] = [];
  constructor() {
    this.cardsPanelHeader = {
      icon: faClockRotateLeft,
      name: 'history',
      withSearch: false,
    };
  }

  ngOnInit(): void {
    this.vacationsHistory = this.vacationHistoryService.getVacationsHistory();
  }
}
