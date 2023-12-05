import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HabitRoutingModule } from './habit-routing.module';
import { GenericNameTableModule } from '../generic-name-table/generic-name-table.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HabitRoutingModule,
    GenericNameTableModule
  ]
})
export class HabitModule { }
