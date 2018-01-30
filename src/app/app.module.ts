/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IdlePreloadModule } from '@angularclass/idle-preload';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { CoreModule } from './@core/core.module';
import { StoreModule } from './@store';
import { ThemeModule } from './@theme/theme.module';
import { AclModule } from './@acl';
import { AppComponent } from './app.component';
import { AppRoutingModule, routedComponents } from './app-routing.module';

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    IdlePreloadModule.forRoot(),
    NgbModule.forRoot(),
    CoreModule.forRoot(),
    ThemeModule.forRoot(),
    StoreModule.forRoot(),
    AclModule.forRoot(),
    AppRoutingModule,
  ],
  declarations: [AppComponent, ...routedComponents],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
})
export class AppModule {}
