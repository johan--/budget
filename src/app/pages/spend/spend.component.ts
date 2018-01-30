import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { SpendStore } from './spend.store';
// import { ConfirmationBarService } from '../../@theme/services';
import { AuthStore } from '../../auth/auth.store';

@Component({
  selector: 'ngx-user-admin',
  styleUrls: ['./spend.component.scss'],
  templateUrl: './spend.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpendComponent implements OnInit, OnDestroy  {
  constructor(public store: SpendStore,
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
