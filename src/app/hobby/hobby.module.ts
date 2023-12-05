import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HobbyRoutingModule } from './hobby-routing.module';
import { GenericNameTableModule } from '../generic-name-table/generic-name-table.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HobbyRoutingModule,GenericNameTableModule
  ]
})
export class HobbyModule { }
