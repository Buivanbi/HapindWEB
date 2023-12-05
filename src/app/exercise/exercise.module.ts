import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciseRoutingModule } from './exercise-routing.module';
import { GenericNameTableModule } from '../generic-name-table/generic-name-table.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ExerciseRoutingModule,
    GenericNameTableModule
  ]
})
export class ExerciseModule { }
