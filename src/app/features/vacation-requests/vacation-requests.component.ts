import { Component, inject, OnInit } from '@angular/core';
import { CardsPanelHeaderComponent } from '../../shared/components/cards-panel-header/cards-panel-header.component';
import { ICardsPanelHeader, VacationRequests } from '../../shared/interfaces';
import { faListCheck, faFilter } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { VacationRuquestService } from '../../shared/services/vacation-ruquest.service';
import { VacationRequestCardHorizontalComponent } from './components/vacation-request-card-horizontal/vacation-request-card-horizontal.component';
import { FormsModule } from '@angular/forms';
import { VacationRequestsFilterPipe } from '../../shared/pipes/vacation-requests-filter.pipe';
import { PaginationComponent } from '../../shared/components/pagination/pagination.component';

@Component({
  selector: 'app-vacation-requests',
  standalone: true,
  imports: [
    CardsPanelHeaderComponent,
    FontAwesomeModule,
    VacationRequestCardHorizontalComponent,
    FormsModule,
    VacationRequestsFilterPipe,
    PaginationComponent,
  ],
  templateUrl: './vacation-requests.component.html',
  styleUrl: './vacation-requests.component.css',
})
export class VacationRequestsComponent implements OnInit {
  /**fontawesome icons */
  faFilter = faFilter;
  cardsPanelHeader: ICardsPanelHeader;
  vacationRequestService = inject(VacationRuquestService);
  vacationRequests: VacationRequests[] = [];
  isAllSelected: boolean = false;
  searchQuery: string = '';
  pagesNumber!: number;
  constructor() {
    this.cardsPanelHeader = {
      icon: faListCheck,
      name: 'vacation requests',
      withSearch: true,
    };
  }

  ngOnInit(): void {
    const resp = this.vacationRequestService.getVacationRequestsPage(9, 1);
    this.vacationRequests = resp.data;
    this.pagesNumber = resp.totalPages / 9;
  }

  toggleCard(event: { id: string; isChecked: boolean }) {
    if (!event.isChecked) this.isAllSelected = false;
    let vacationRequestChecked = this.vacationRequests.find(
      (vacation) => vacation.id == event.id
    );
    if (vacationRequestChecked) {
      vacationRequestChecked.isChecked = event.isChecked;
      this.isAllSelected = this.isAllVacationRequestsChecked()
        ? true
        : this.isAllSelected;
    }
  }

  isAllVacationRequestsChecked() {
    const checkRequests = this.vacationRequests.filter(
      (request) => request.isChecked
    );

    return checkRequests.length === this.vacationRequests.length;
  }

  toggleSelectAll() {
    this.vacationRequests.forEach((request) => {
      request.isChecked = this.isAllSelected;
    });
  }

  searchPerformed(searchQuery: string) {
    this.searchQuery = searchQuery;
  }

  updatePage(pageNumber: number) {
    const resp = this.vacationRequestService.getVacationRequestsPage(
      9,
      pageNumber
    );
    this.vacationRequests = resp.data;
    this.pagesNumber = resp.totalPages;
  }
}
