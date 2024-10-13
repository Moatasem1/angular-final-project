import { Component, inject, OnInit } from '@angular/core';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';
import {
  ICardsPanelHeader,
  VacationRequests,
} from '../../../../shared/interfaces';
import { CardsPanelComponent } from '../../../../shared/components/cards-panel/cards-panel.component';
import { VacationRuquestService } from '../../../../shared/services/vacation-ruquest.service';
import { VacationRequestCardColComponent } from '../vacation-request-card-col/vacation-request-card-col.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-vacation-requests-panel',
  standalone: true,
  imports: [CardsPanelComponent, VacationRequestCardColComponent, DatePipe],
  templateUrl: './vacation-requests-panel.component.html',
  styleUrl: './vacation-requests-panel.component.css',
})
export class VacationRequestsPanelComponent implements OnInit {
  /**font awesome icons */
  faListCheck = faListCheck;
  //
  vacationRuquestService = inject(VacationRuquestService);

  vacationRequests: VacationRequests[] = [];
  filteredVacationRequests: VacationRequests[] = [];
  searchQuery: string = '';

  cardsPanelHeader: ICardsPanelHeader;
  constructor() {
    this.cardsPanelHeader = {
      name: 'Vacation Requests',
      icon: faListCheck,
      withSearch: true,
    };
  }

  ngOnInit(): void {
    const vacationRequests = this.vacationRuquestService.getVacationRequests();
    this.vacationRequests = vacationRequests.map(
      (request) => new VacationRequests(request)
    );

    this.filteredVacationRequests = this.vacationRequests;
  }

  filterVacationRequests(searchQuery: string) {
    this.searchQuery = searchQuery;
    const datePipe = new DatePipe('en-US');
    this.filteredVacationRequests = this.vacationRequests.filter(
      (request) =>
        request.fullName.toLocaleLowerCase().includes(searchQuery) ||
        datePipe
          .transform(request.submittedOn, 'dd/MM/yyyy')
          ?.toLocaleLowerCase()
          .includes(searchQuery) ||
        request.duration.toLocaleLowerCase().includes(searchQuery) ||
        request.salary.toString().toLocaleLowerCase().includes(searchQuery) ||
        request.duration.toLocaleLowerCase().includes(searchQuery)
    );
  }
}
