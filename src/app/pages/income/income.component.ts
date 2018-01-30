import { Component, ChangeDetectionStrategy, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { IncomeStore } from './income.store';
import { ConfirmationBarService } from '../../@theme/services';
import { AuthStore } from '../../auth/auth.store';

@Component({
  selector: 'ngx-user-admin',
  styleUrls: ['./income.component.scss'],
  templateUrl: './income.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IncomeComponent implements OnInit, OnDestroy  {
  constructor(public store: IncomeStore,
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
