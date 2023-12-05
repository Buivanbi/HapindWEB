import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurposeRoutingModule } from './purpose-routing.module';
import { GenericNameTableModule } from '../generic-name-table/generic-name-table.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PurposeRoutingModule,
    GenericNameTableModule
  ]
})
export class PurposeModule { }
