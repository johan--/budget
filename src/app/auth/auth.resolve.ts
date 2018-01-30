import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthStore } from './auth.store';

@Injectable()
export class AuthResolve implements Resolve<any> {
  constructor(private store: AuthStore) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.store.fetchCurrentUser();
  }
}
