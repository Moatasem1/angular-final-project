import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserDetails } from '../../interfaces';

@Component({
  selector: 'app-user-details-block',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './user-details-block.component.html',
  styleUrl: './user-details-block.component.css',
})
export class UserDetailsBlockComponent {
  @Input({ required: true }) userDetails!: UserDetails;

  constructor() {}
}
