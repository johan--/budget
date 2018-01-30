import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { AuthStore } from '../../../auth/auth.store';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  userMenu = [ { title: 'Log out', link: '/auth/logout' }];

  constructor(
    private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    public authStore: AuthStore,
    private router: Router,
  ) {}

  toggleSidebar($event) {
    $event.preventDefault();
    this.sidebarService.toggle(true, 'menu-sidebar');
  }

  goHome() {
    this.menuService.navigateHome();
  }

  navigateCountrySelector() {
    this.router.navigate(['/pages/dashboard']);
  }
}
