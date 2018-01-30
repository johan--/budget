import { NgModule, ModuleWithProviders } from '@angular/core';

// import { ReferenceDataStore } from './reference-data.store';

// const STORES = [ReferenceDataStore];
const STORES = [];

@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [],
})
export class StoreModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: StoreModule,
      providers: [...STORES],
    };
  }
}
