import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ngx-auth',
  template: `
    <nb-layout windowMode>
      <nb-layout-column>
        <router-outlet></router-outlet>
      </nb-layout-column>
    </nb-layout>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent {}
