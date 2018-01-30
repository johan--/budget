import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { environment } from '../../../environments/environment';
import { LocalStorageService } from '../../@core/utils';

@Injectable()
export class CountryGuard implements CanActivate {
  constructor(private router: Router, private localStorage: LocalStorageService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const result = this.localStorage.hasItem(environment.localStorageParams.selectedCountry);
    if (result) {
      return true;
    }
    this.router.navigate(['/pages/dashboard']);
    return false;
  }
}
