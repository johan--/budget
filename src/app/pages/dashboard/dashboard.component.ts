import { Component, ChangeDetectionStrategy, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { DashboardStore } from './dashboard.store';
import { ConfirmationBarService } from '../../@theme/services';
import { AuthStore } from '../../auth/auth.store';

@Component({
  selector: 'ngx-user-admin',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit, OnDestroy  {
  constructor(public store: DashboardStore,
              private cd: ChangeDetectorRef, public authStore: AuthStore,
              private confirmationBar: ConfirmationBarService) {}

  private alive: boolean = true;

  ngOnInit() {
  }

  editSettings(item) {
    item.isEdit = true;
    // save current value
  }

  saveSettings(item) {
    // this.store
    //   .saveSettings(item)
    //   .takeWhile(() => this.alive)
    //   .subscribe(() => {
    //     item.isEdit = false;
    //     this.updateUsersTable();
    //     this.confirmationBar.openForSave();
    //   });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
