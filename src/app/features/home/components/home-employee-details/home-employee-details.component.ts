import { Component, inject, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChartLine, faUser } from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../../../../core/services/user.service';
import { UserDetailsBlockComponent } from '../../../../shared/components/user-details-block/user-details-block.component';
import { UserDetails } from '../../../../shared/interfaces';

@Component({
  selector: 'app-home-employee-details',
  standalone: true,
  imports: [FontAwesomeModule, UserDetailsBlockComponent],
  templateUrl: './home-employee-details.component.html',
  styleUrl: './home-employee-details.component.css',
})
export class HomeEmployeeDetailsComponent implements OnInit {
  /**font awesome icons */
  /** */
  user: UserService = inject(UserService);
  userDetails: UserDetails[] = [];

  constructor() {}

  ngOnInit() {
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
        label: 'Reporting To',
        prefix: 'Level',
        value: this.user.corporateLevel,
        suffix: '',
      },
    ];
  }
}
