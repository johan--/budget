import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import {
  NbMediaBreakpoint,
  NbMediaBreakpointsService,
  NbMenuService,
  NbSidebarService,
  NbThemeService,
} from '@nebular/theme';

import { PagesStore } from './pages.store';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['./pages.component.scss'],
  templateUrl: `./pages.component.html`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PagesComponent implements OnInit, OnDestroy {
  constructor(
    public store: PagesStore,
    private menuService: NbMenuService,
    private themeService: NbThemeService,
    private bpService: NbMediaBreakpointsService,
    private sidebarService: NbSidebarService,
  ) {}

  private alive: boolean = true;

  ngOnInit() {
    this.initSidebar();
    this.initMenu();
  }

  private initSidebar() {
    const isBp = this.bpService.getByName('is');
    this.menuService
      .onItemSelect()
      .withLatestFrom(this.themeService.onMediaQueryChange())
      .delay(20)
      .takeWhile(() => this.alive)
      .subscribe(([item, [bpFrom, bpTo]]: [any, [NbMediaBreakpoint, NbMediaBreakpoint]]) => {
        if (bpTo.width <= isBp.width) {
          this.sidebarService.collapse('menu-sidebar');
        }
      });
  }

  private initMenu() {
    const menu = [
      {
        title: 'Home',
        icon: 'home',
        link: '/pages/dashboard',
      },
      {
        title: 'Spend',
        icon: 'account_balance',
        hidden: !this.canShow(),
      },
      {
        title: 'Income',
        icon: 'sms_failed',
        link: '/pages/income',
        hidden: !this.canShow(),
      },
      {
        title: 'Settings',
        icon: 'settings',
        link: '/pages/settings',
        hidden: !this.canShow(),
      },
    ];
    this.store.setMenu(menu);
  }

  ngOnDestroy() {
    this.alive = false;
  }

  private canShow(): boolean {
    return true;
  }
}
