import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { SettingsStore } from './settings.store';
// import { ConfirmationBarService } from '../../@theme/services';
import { AuthStore } from '../../auth/auth.store';

@Component({
  selector: 'ngx-user-admin',
  styleUrls: ['./settings.component.scss'],
  templateUrl: './settings.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsComponent implements OnInit, OnDestroy  {
  constructor(public store: SettingsStore,
              public authStore: AuthStore,
              /*private confirmationBar: ConfirmationBarService*/) {}

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
