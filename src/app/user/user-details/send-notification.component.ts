import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Notification } from 'src/app/model/notification.model';
import { UserService } from '../user.service'; 
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'fury-send-notification',
  templateUrl: './send-notification.component.html',
  styleUrls: ['./send-notification.component.scss']
})
export class SendNotificationComponent implements OnInit {
  @Input()
  table: Notification;
  static id = 100;

  form: FormGroup;
  mode: 'create' | 'update' = 'create';

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<SendNotificationComponent>,
    private fb: FormBuilder, private userService: UserService) {
  }

  ngOnInit() {
    this.mode = this.defaults ? 'update' : 'create';

    this.form = this.fb.group({
      id: [this.defaults?.id],
      message: [this.defaults?.message || '', Validators.required],
    });
  }

  save() {
    if (this.mode === 'create') {
      this.createTable();
    } else if (this.mode === 'update') {
      this.updateTable();
    }
  }

   // private handleValidationErrors(errors: { [key: string]: string }): void {
  //   Object.keys(errors).forEach((field) => {
  //     const control = this.form.get(field);
  //     if (control) {
  //       control.setErrors({ serverError: errors[field] });
  //     }
  //   });
  // }

  private handleValidationErrors(errors: { [key: string]: string }): void {
    console.log('Validation errors:', errors);
    Object.keys(errors).forEach((field) => {
      const control = this.form.get(field);
      if (control) {
        control.setErrors({ serverError: errors[field] });
        console.log(`Updated form control '${field}' with error:`, control);
      }
    });
  }

  createTable() {
    const table = this.form.value;
    this.userService.create(table).subscribe((createdTable) => {
      this.dialogRef.close(createdTable);
    },
    (error) => {
      if (error instanceof HttpErrorResponse && error.status === 400) {
        this.handleValidationErrors(error.error);
      }
    }
  );
  }

  updateTable() {
    const table = this.form.value;
    this.userService.upsert(table.id, table).subscribe(() => {
      this.dialogRef.close(table);
    },
    (error) => {
      // Handle validation errors and update form controls
      if (error instanceof HttpErrorResponse && error.status === 400) {
        this.handleValidationErrors(error.error);
      }
    }
  );
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }
}
