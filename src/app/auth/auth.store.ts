import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { observable, action } from 'mobx';

@Injectable()
export class AuthStore {
  constructor() { }

  @observable currentUser: any;

  @action
  fetchCurrentUser(): Observable<any> {
    return Observable.of('John Dow');
  }
}
