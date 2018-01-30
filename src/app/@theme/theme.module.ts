import { NgModule, ModuleWithProviders, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MobxAngularModule } from 'mobx-angular';
import {
  MatFormFieldModule,
  MatSelectModule,
  MatTableModule,
  MatRadioModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatExpansionModule,
  MatDialogModule,
  MatSnackBarModule,
  MatListModule,
  MatDatepickerModule,
  MatNativeDateModule,
} from '@angular/material';
import {
  NbActionsModule,
  NbCardModule,
  NbLayoutModule,
  NbMenuModule,
  NbRouteTabsetModule,
  NbSearchModule,
  NbSidebarModule,
  NbTabsetModule,
  NbThemeModule,
  NbUserModule,
  NbCheckboxModule,
} from '@nebular/theme';

import * as Components from './components';
import * as Pipes from './pipes';
import * as Services from './services';
import { MATERIAL_THEME } from './styles/theme.material';

const BASE_MODULES = [CommonModule, FormsModule, ReactiveFormsModule];

const NB_MODULES = [
  NbCardModule,
  NbLayoutModule,
  NbTabsetModule,
  NbRouteTabsetModule,
  NbMenuModule,
  NbUserModule,
  NbActionsModule,
  NbSearchModule,
  NbSidebarModule,
  NbCheckboxModule,
  NgbModule,
];

const NB_THEME_PROVIDERS = [
  ...NbThemeModule.forRoot(
    {
      name: 'material',
    },
    [MATERIAL_THEME],
  ).providers,
  ...NbSidebarModule.forRoot().providers,
  ...NbMenuModule.forRoot().providers,
];

const MATERIAL_MODULES = [
  MatFormFieldModule,
  MatSelectModule,
  MatTableModule,
  MatRadioModule,
  MatInputModule,
  MatButtonModule,
  MatExpansionModule,
  MatDialogModule,
  MatSnackBarModule,
  MatListModule,
  MatDatepickerModule,
  MatNativeDateModule,
];

const EXPORTED_MODULES = [
  MobxAngularModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatCardModule,
  MatCheckboxModule,
  MatExpansionModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
];

const COMPONENTS = [
  Components.HeaderComponent,
  Components.FooterComponent,
  Components.SearchInputComponent,
  Components.ErrorHandlerComponent,
  Components.NgxMenuComponent,
  Components.NgxMenuItemComponent,
  Components.NgxMenuItemsComponent,
  Components.NgxRefLinkComponent,
];

const ENTRY_COMPONENTS = [Components.ErrorHandlerComponent];

const PIPES = [Pipes.CapitalizePipe, Pipes.PluralPipe, Pipes.RoundPipe, Pipes.TimingPipe];

const PROVIDERS = [Components.ErrorHandlerService, Services.ConfirmationBarService];

const INTERCEPTORS = [Components.ErrorHandlerInterceptor];

export function nbErrorHandlerInterceptorsFactory(injector: Injector) {
  return new Components.ErrorHandlerInterceptor(injector);
}

@NgModule({
  imports: [RouterModule, ...BASE_MODULES, ...NB_MODULES, ...MATERIAL_MODULES],
  exports: [...BASE_MODULES, ...NB_MODULES, ...COMPONENTS, ...PIPES, ...EXPORTED_MODULES],
  declarations: [...COMPONENTS, ...PIPES],
  entryComponents: [...ENTRY_COMPONENTS],
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: ThemeModule,
      providers: [
        ...NB_THEME_PROVIDERS,
        ...PROVIDERS,
        ...INTERCEPTORS,
        {
          provide: HTTP_INTERCEPTORS,
          useFactory: nbErrorHandlerInterceptorsFactory,
          deps: [Injector],
          multi: true,
        },
      ],
    };
  }
}
