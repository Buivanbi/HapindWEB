import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReasonRoutingModule } from './reason-routing.module';
import { GenericNameTableModule } from '../generic-name-table/generic-name-table.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReasonRoutingModule,
    GenericNameTableModule
  ]
})
export class ReasonModule { }
