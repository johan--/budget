import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
  private localStorage = localStorage;

  getItem(key: string): any {
    try {
      return JSON.parse(this.localStorage.getItem(key));
    } catch (error) {
      return new Error('Invalid data in localStorage.');
    }
  }

  getAllItems(): { [key: string]: any } {
    const state = {};
    const size = this.localStorage.length;
    for (let i = 0; i < size; i++) {
      const key = this.localStorage.key(i);
      state[key] = JSON.parse(this.localStorage.getItem(key));
    }
    return state;
  }

  setItem(key: string, data: any): boolean {
    this.localStorage.setItem(key, JSON.stringify(data));
    return true;
  }

  removeItem(key: string): boolean {
    this.localStorage.removeItem(key);
    return true;
  }

  clear(): boolean {
    this.localStorage.clear();
    return true;
  }

  hasItem(key: string): boolean {
    return <boolean>this.getItem(key);
  }
}
