import { Injectable } from '@angular/core';
import { observable, action } from 'mobx';

@Injectable()
export class PagesStore {
  @observable menu: any[] = [];

  @action
  setMenu(value: any[]) {
    this.menu = value;
  }
}
