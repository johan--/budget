import { Component, ChangeDetectionStrategy, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'ngx-error-handler',
  templateUrl: './error-handler.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorHandlerComponent {
  constructor(
    public dialogRef: MatDialogRef<ErrorHandlerComponent>,
    @Optional()
    @Inject(MAT_DIALOG_DATA)
    public data: any,
  ) {}

  close() {
    this.dialogRef.close();
  }
}
