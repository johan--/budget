import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { SpendStore } from './spend.store';

@Injectable()
export class SpendResolve implements Resolve<any> {
  constructor(private store: SpendStore) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.store.fetchSpend();
  }
}
