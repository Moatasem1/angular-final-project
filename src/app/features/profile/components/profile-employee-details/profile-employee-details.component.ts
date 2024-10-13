import { Component, inject } from '@angular/core';
import { UserService } from '../../../../core/services/user.service';
import { UserDetails } from '../../../../shared/interfaces';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faCalendar,
  faChartLine,
  faHourglass,
  faStethoscope,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { UserDetailsBlockComponent } from '../../../../shared/components/user-details-block/user-details-block.component';

@Component({
  selector: 'app-profile-employee-details',
  standalone: true,
  imports: [FontAwesomeModule, UserDetailsBlockComponent],
  templateUrl: './profile-employee-details.component.html',
  styleUrl: './profile-employee-details.component.css',
})
export class ProfileEmployeeDetailsComponent {
  user = inject(UserService);
  userDetails: UserDetails[];
  constructor() {
    this.userDetails = [
      {
        icon: faUser,
        label: 'Reporting To',
        prefix: '',
        value: this.user.reportingTo,
        suffix: '',
      },
      {
        icon: faChartLine,
        label: 'corporate level',
        prefix: 'Level',
        value: this.user.corporateLevel,
        suffix: '',
      },
      {
        icon: faHourglass,
        label: 'life time',
        prefix: '',
        value: this.user.lifeTime,
        suffix: 'years',
      },
      {
        icon: faCalendar,
        label: 'vacation days left',
        prefix: '',
        value: this.user.vacationDaysLeft,
        suffix: 'days',
      },
      {
        icon: faStethoscope,
        label: 'sick days left',
        prefix: '',
        value: this.user.sickDaysLeft,
        suffix: 'days',
      },
    ];
  }
}
