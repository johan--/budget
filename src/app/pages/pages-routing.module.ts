import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent, DashboardResolve } from './dashboard';
import { IncomeComponent, IncomeResolve } from './income';
import { SpendComponent, SpendResolve } from './spend';
import { SettingsComponent, SettingsResolve } from './settings';
import { AuthResolve } from '../auth/auth.resolve';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    resolve: {
      AuthResolve,
    },
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        canActivate: [],
        component: DashboardComponent,
        resolve: {
          DashboardResolve,
        },
      },
      {
        path: 'spend',
        canActivate: [],
        component: SpendComponent,
        resolve: {
          SpendResolve,
        },
      },
      {
        path: 'income',
        canActivate: [],
        component: IncomeComponent,
        resolve: {
          IncomeResolve,
        },
      },
      {
        path: 'settings',
        canActivate: [],
        component: SettingsComponent,
        resolve: {
          SettingsResolve,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}

export const resolvers = [
  SettingsResolve,
  IncomeResolve,
  SpendResolve,
  DashboardResolve,
  AuthResolve,
];
