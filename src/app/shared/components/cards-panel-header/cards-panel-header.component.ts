import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ICardsPanelHeader } from '../../interfaces';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cards-panel-header',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './cards-panel-header.component.html',
  styleUrl: './cards-panel-header.component.css',
})
export class CardsPanelHeaderComponent {
  /** fontawesome */
  faMagnifyingGlass = faMagnifyingGlass;
  //
  @Input({ required: true }) cardsPanelHeader!: ICardsPanelHeader;
  @Output() searchPerformed = new EventEmitter<string>();

  onSearch(searchQuery: string) {
    this.searchPerformed.emit(searchQuery.trim().toLowerCase());
  }
}
