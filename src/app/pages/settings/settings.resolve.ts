import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { SettingsStore } from './settings.store';

@Injectable()
export class SettingsResolve implements Resolve<any> {
  constructor(private store: SettingsStore) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.store.fetchSettings();
  }
}
