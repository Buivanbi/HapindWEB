import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmokingRoutingModule } from './smoking-routing.module';
import { GenericNameTableModule } from '../generic-name-table/generic-name-table.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SmokingRoutingModule,
    GenericNameTableModule
  ]
})
export class SmokingModule { }
