import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { observable, action } from 'mobx';
import 'rxjs/add/operator/catch';

@Injectable()
export class SpendStore {
  constructor() {}

  @observable spends: any;

  @action
  fetchSpend(): Observable<any[]> {
    return Observable.of(['1000 USD']).do(data => this.spends = data);
  }
}
