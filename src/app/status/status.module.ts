import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatusRoutingModule } from './status-routing.module';
import { GenericNameTableModule } from '../generic-name-table/generic-name-table.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StatusRoutingModule,
    GenericNameTableModule
  ]
})
export class StatusModule { }
