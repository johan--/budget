import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material';

@Injectable()
export class ConfirmationBarService {
  constructor(private snackBar: MatSnackBar) {}

  openForSave(): MatSnackBarRef<any> {
    return this.open('Saved', 'Close');
  }

  openForDelete(): MatSnackBarRef<any> {
    return this.open('Deleted', 'Close');
  }

  open(message: string, action: string): MatSnackBarRef<any> {
    return this.snackBar.open(message, action, { duration: 2000 });
  }
}
