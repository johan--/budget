import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { LocalStorageService } from '../@core/utils';

@Injectable()
export class AuthService {
  constructor(private localStorage: LocalStorageService) {}

  get initUrl(): string {
    return environment.initUrl;
  }

  generateApiUrl(apiPath: string): string {
    return `${environment.apiUrl}/${apiPath}`;
}

  get isAuthenticated(): boolean {
    // TODO: fix before prod
    return true;
  }

  setLocalStorageItem(value: string, key: string) {
    value && this.localStorage.setItem(key, value);
  }

  logout() {
    this.localStorage.clear();
  }
}
