import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { IdlePreload } from '@angularclass/idle-preload';

import { AuthGuard } from './@acl/guards';
import * as Auth from './auth';

const routes: Routes = [
  {
    path: 'pages',
    canActivate: [AuthGuard],
    loadChildren: './pages/pages.module#PagesModule',
  },
  {
    path: 'auth',
    component: Auth.AuthComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        component: Auth.LoginComponent,
      },
      {
        path: 'logout',
        component: Auth.LogoutComponent,
      },
    ],
  },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },
];

const config: ExtraOptions = {
  useHash: true,
  preloadingStrategy: IdlePreload,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routedComponents = [Auth.AuthComponent, Auth.LoginComponent, Auth.LogoutComponent];
