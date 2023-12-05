import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PetRoutingModule } from './pet-routing.module';
import { GenericNameTableModule } from '../generic-name-table/generic-name-table.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PetRoutingModule,
    GenericNameTableModule
  ]
})
export class PetModule { }
