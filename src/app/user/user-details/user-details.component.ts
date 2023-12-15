import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { fadeInRightAnimation } from 'src/@fury/animations/fade-in-right.animation';
import { fadeInUpAnimation } from 'src/@fury/animations/fade-in-up.animation';
import { User } from 'src/app/model/user.model';

import { UserService } from '../user.service';
import { UserMusic } from 'src/app/model/user-music.model';
import { UserSinger } from 'src/app/model/user-singer.model';
import { UserPet } from 'src/app/model/user-pet.model';
import { UserLanguage } from 'src/app/model/user-language.model';
import { UserHobby } from 'src/app/model/user-hobby.model';
import { UserExpecting } from 'src/app/model/user-expecting.model';
import { UserExercise } from 'src/app/model/user-exercise.model';

@Component({
  selector: 'fury-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})

export class UserDetailsComponent implements OnInit {
  
  static id = 100;

  form: UntypedFormGroup;
  mode: 'create' | 'update' = 'create';
  musicList: UserMusic[];
  singerList: UserSinger[];
  petList: UserPet[];
  languageList: UserLanguage[];
  hobbyList: UserHobby[];
  expectingList :UserExpecting[];
  exerciseList: UserExercise[];

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
              private dialogRef: MatDialogRef<UserDetailsComponent>,
              private fb: UntypedFormBuilder, private userService: UserService) {
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
      status: [this.defaults?.status],
      musicList:[],
      singerList:[],
      petList:[],
      languageList:[],
      hobbyList:[],
      expectingList:[],
      exerciseList:[],
    });

    //music
    this.userService.findMusicById(this.defaults?.id).subscribe((musicList) => {
      // Assuming musicList is an array property in the User object
      this.musicList = musicList
    });

    //singer
    this.userService.findSingerById(this.defaults?.id).subscribe((singerList) => {
      // Assuming musicList is an array property in the User object
      this.singerList = singerList
    });

    //pet
    this.userService.findPetById(this.defaults?.id).subscribe((petList) => {
      // Assuming musicList is an array property in the User object
      this.petList = petList
    });

     //Language
     this.userService.findLanguageById(this.defaults?.id).subscribe((languageList) => {
      // Assuming musicList is an array property in the User object
      this.languageList = languageList
    });

     //Hobby
     this.userService.findHobbyById(this.defaults?.id).subscribe((hobbyList) => {
      // Assuming musicList is an array property in the User object
      this.hobbyList = hobbyList
    });

    //Expecting
    this.userService.findExerciseById(this.defaults?.id).subscribe((exerciseList) => {
      // Assuming musicList is an array property in the User object
      this.exerciseList = exerciseList
    });

    //Exercise
    this.userService.findExpectingById(this.defaults?.id).subscribe((expectingList) => {
      // Assuming musicList is an array property in the User object
      this.expectingList = expectingList
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
