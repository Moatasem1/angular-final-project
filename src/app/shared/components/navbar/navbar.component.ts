import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBell, faCircleUser } from '@fortawesome/free-solid-svg-icons';

/**
 * Interface representing a navigation tab in the navbar.
 */

interface INavBarTabs {
  /** The display label for the tab. */
  label: string;
  /** The route path for the tab. */
  path: string;
}

/**
 * NavbarComponent - Represents the navigation bar of the application.
 *
 * Usage:
 * 1. Set the desired navigation tabs by modifying the `navBarTabs` array in the constructor.
 * 2. Each tab should have a `label` for display and a `path` for routing.
 * 3. The tabs will be generated in the order they are defined in the `navBarTabs` array.
 */
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FontAwesomeModule, RouterModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  // FontAwesome icons
  faBell = faBell;
  faCircleUser = faCircleUser;
  navBarTabs: INavBarTabs[];

  constructor() {
    this.navBarTabs = [
      { label: 'home', path: '/home' },
      { label: 'requests', path: '/vacation-requests' },
      { label: 'profiles', path: '/profiles' },
      { label: 'reports', path: '/reports' },
      { label: 'settings', path: '/settings' },
    ];
  }
}
