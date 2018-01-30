import { NgModule, ModuleWithProviders } from '@angular/core';

import * as Guards from './guards';
import { AuthService } from './auth.service';

const ACL_GUARDS = [Guards.AuthGuard, Guards.CountryGuard];

@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [],
})
export class AclModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: AclModule,
      providers: [...ACL_GUARDS, AuthService],
    };
  }
}
