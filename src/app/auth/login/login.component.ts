import {Component, ChangeDetectionStrategy, OnInit, OnDestroy} from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../@acl';

@Component({
  selector: 'ngx-login',
  template: `
    <h1>Authentication...</h1>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit, OnDestroy {
  private alive: boolean = true;

  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit() {
    if (!this.auth.isAuthenticated) {
      window.location.href = this.auth.initUrl;
    } else {
      this.router.navigate(['/pages/dashboard']);
    }
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
