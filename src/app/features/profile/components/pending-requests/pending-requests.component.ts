import { Component, inject, OnInit } from '@angular/core';
import { CardsPanelComponent } from '../../../../shared/components/cards-panel/cards-panel.component';
import { ICardsPanelHeader } from '../../../../shared/interfaces';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { PendingRequestCardComponent } from '../pending-request-card/pending-request-card.component';
import { PendingRequest } from '../../interfaces';
import { PendingRequestService } from '../../services/pending-request.service';

@Component({
  selector: 'app-pending-requests',
  standalone: true,
  imports: [
    PendingRequestsComponent,
    CardsPanelComponent,
    PendingRequestCardComponent,
  ],
  templateUrl: './pending-requests.component.html',
  styleUrl: './pending-requests.component.css',
})
export class PendingRequestsComponent implements OnInit {
  cardsPanelHeader: ICardsPanelHeader;
  pendingRequests: PendingRequest[] = [];
  pendingRequestService = inject(PendingRequestService);
  constructor() {
    this.cardsPanelHeader = {
      icon: faSpinner,
      name: 'pending requests',
      withSearch: false,
    };
  }

  ngOnInit(): void {
    this.pendingRequests = this.pendingRequestService.getPendingRequests();
  }
}
