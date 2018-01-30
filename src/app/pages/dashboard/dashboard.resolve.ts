import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { DashboardStore } from './dashboard.store';

@Injectable()
export class DashboardResolve implements Resolve<any> {
  constructor(private store: DashboardStore) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.store.fetchSettings();
  }
}
