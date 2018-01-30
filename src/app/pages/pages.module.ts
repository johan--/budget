import { NgModule } from '@angular/core';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IncomeComponent } from './income/income.component';
import { SpendComponent } from './spend/spend.component';
import { SettingsComponent } from './settings/settings.component';
import { PagesRoutingModule, resolvers } from './pages-routing.module';
import { PagesStore } from './pages.store';
import { AuthStore } from '../auth/auth.store';

const PAGES_COMPONENTS = [PagesComponent,
  DashboardComponent, IncomeComponent, SpendComponent, SettingsComponent];

@NgModule({
  imports: [PagesRoutingModule, ThemeModule],
  declarations: [...PAGES_COMPONENTS],
  providers: [PagesStore, AuthStore, ...resolvers],
})
export class PagesModule {}
