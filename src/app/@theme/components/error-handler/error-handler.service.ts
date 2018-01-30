import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';

import { ErrorHandlerComponent } from './error-handler.component';

@Injectable()
export class ErrorHandlerService {
  private isOpen: boolean = false;

  constructor(private dialog: MatDialog) {}

  open(data?: any) {
    if (!this.isOpen) {
      this.isOpen = true;
      const dialogRef = this.dialog.open(ErrorHandlerComponent, {
        width: '500px',
        data: data,
      });

      dialogRef.afterClosed().subscribe(result => {
        this.isOpen = false;
      });
    }
  }
}
