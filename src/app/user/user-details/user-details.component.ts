import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { fadeInRightAnimation } from 'src/@fury/animations/fade-in-right.animation';
import { fadeInUpAnimation } from 'src/@fury/animations/fade-in-up.animation';
import { User } from './user.model';

@Component({
  selector: 'fury-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})

export class UserDetailsComponent implements OnInit {
  
  static id = 100;

  form: UntypedFormGroup;
  mode: 'create' | 'update' = 'create';

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
              private dialogRef: MatDialogRef<UserDetailsComponent>,
              private fb: UntypedFormBuilder) {
  }

  ngOnInit() {
    if (this.defaults) {
      this.mode = 'update';
    } else {
      this.defaults = {} as User;
    }

    this.form = this.fb.group({
      firstName: [this.defaults.firstName || '',],
      lastName: [this.defaults.lastName || ''],
      street: this.defaults.street || '',
      city: this.defaults.city || '',
      zipcode: this.defaults.zipcode || '',
      phoneNumber: this.defaults.phoneNumber || '',
    });

    this.mode = this.defaults ? 'update' : 'create';

    this.form = this.fb.group({
      id: [this.defaults?.id],
      fullname: [this.defaults?.fullname],
      email: [this.defaults?.email],
      phone: [this.defaults?.phone],
      dob: [this.defaults?.dob],
      gender: [this.defaults?.gender],
      address: [this.defaults?.address],
      family: [this.defaults?.family],
      drinking: [this.defaults?.drinking],
      work: [this.defaults?.work],
      smoking: [this.defaults?.smoking],
      purpose: [this.defaults?.purpose],
      literacy: [this.defaults?.literacy],
      habit: [this.defaults?.habit],
    });
  }

  save() {
    if (this.mode === 'create') {
      this.createCustomer();
    } else if (this.mode === 'update') {
      this.updateCustomer();
    }
  }

  createCustomer() {
    const customer = this.form.value;
    this.dialogRef.close(customer);
  }

  updateCustomer() {
    const customer = this.form.value;
    customer.id = this.defaults.id;

    this.dialogRef.close(customer);
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }
}
