import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpectingRoutingModule } from './expecting-routing.module';
import { GenericNameTableModule } from '../generic-name-table/generic-name-table.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ExpectingRoutingModule,
    GenericNameTableModule
  ]
})
export class ExpectingModule { }
