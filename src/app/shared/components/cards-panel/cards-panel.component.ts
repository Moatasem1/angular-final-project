import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardsPanelHeaderComponent } from '../cards-panel-header/cards-panel-header.component';
import { ICardsPanelHeader } from '../../interfaces';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cards-panel',
  standalone: true,
  imports: [CardsPanelHeaderComponent, FontAwesomeModule, RouterLink],
  templateUrl: './cards-panel.component.html',
  styleUrl: './cards-panel.component.css',
})
export class CardsPanelComponent {
  /**fontawesome icons */
  faAngleRight = faAngleRight;
  //
  @Input({ required: true }) cardsPanelHeader!: ICardsPanelHeader;
  @Input({ required: true }) viewMorePath!: string;
  @Output() searchPerformed = new EventEmitter<string>();

  onSearch(searchQuery: string) {
    this.searchPerformed.emit(searchQuery);
  }
}
