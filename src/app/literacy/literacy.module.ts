import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LiteracyRoutingModule } from './literacy-routing.module';
import { GenericNameTableModule } from '../generic-name-table/generic-name-table.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LiteracyRoutingModule,
    GenericNameTableModule
  ]
})
export class LiteracyModule { }
