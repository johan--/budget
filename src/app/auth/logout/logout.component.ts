import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../@acl';

@Component({
  selector: 'ngx-logout',
  template: `
    <h1>Logout</h1>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoutComponent implements OnInit {
  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit() {
    this.auth.logout();
    this.router.navigate(['/auth/login']);
  }
}
