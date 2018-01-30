import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { observable, action } from 'mobx';
import 'rxjs/add/operator/catch';

@Injectable()
export class SettingsStore {
  constructor() {}

  @observable settings: any;

  @action
  fetchSettings(): Observable<any[]> {
    return Observable.of(['settings']).do(data => this.settings = data);
  }
}
