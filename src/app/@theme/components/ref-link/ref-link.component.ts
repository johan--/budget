import { Component, ChangeDetectionStrategy, Input, forwardRef } from '@angular/core';
import { FormControl, Validators, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ngx-ref-link',
  template: `
    <div class="group-margin group-row">
      <div *ngIf="!isEdit">
        <span>{{title}}</span>
        <a target="_blank" href="{{ refworldLink }}">{{ refworldLink }}</a>
      </div>
      <div *ngIf="isEdit" style="width: 100%;" >
        <mat-form-field>
          <input matInput placeholder="{{title}}"
                      [readonly]="!isEdit"
                      [(ngModel)]="value"
                      [formControl]="urlFormControl"
                      type="url"
                      name="instrumentRefLink" />
          <mat-error *ngIf="urlFormControl.hasError('pattern')">Please enter a valid url</mat-error>
        </mat-form-field>
      </div>
      <div>
        <a *ngIf="refworldLink && !urlFormControl.hasError('pattern')" target="_blank" href="{{ refworldLink }}">
            <i class="material-icons button-icons" title="Visit Link">open_in_browser</i>
        </a>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgxRefLinkComponent),
      multi: true,
    },
  ],
})
export class NgxRefLinkComponent implements ControlValueAccessor {

  @Input() title: string;
  @Input() isEdit: boolean;
  @Input('value') refworldLink: string;

  onChange: any = () => {};
  onTouched: any = () => {};
  get value() {
    return this.refworldLink;
  }
  set value(val) {
    this.refworldLink = val;
    this.onChange(val);
    this.onTouched();
  }
  registerOnChange(fn: any) {
    this.onChange = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
  writeValue(val: any) {
    this.value = val;
  }

  urlFormControl = new FormControl('', [
    Validators.pattern(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/),
  ]);
}
