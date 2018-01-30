import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { observable, action } from 'mobx';
import 'rxjs/add/operator/catch';

@Injectable()
export class IncomeStore {
  constructor() {}

  @observable income: any;

  @action
  fetchIncome(): Observable<any[]> {
    return Observable.of(['8999 USD']).do(data => this.income = data);
  }
}
