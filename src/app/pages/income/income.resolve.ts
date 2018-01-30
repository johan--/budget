import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { IncomeStore } from './income.store';

@Injectable()
export class IncomeResolve implements Resolve<any> {
  constructor(private store: IncomeStore) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.store.fetchIncome();
  }
}
