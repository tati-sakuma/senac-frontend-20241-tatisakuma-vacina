import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PessoasRoutingModule } from './pessoas-routing.module';
import { ConsultarTodasComponent } from './consultar-todas/consultar-todas.component';


@NgModule({
  declarations: [
    ConsultarTodasComponent
  ],
  imports: [
    CommonModule,
    PessoasRoutingModule
  ]
})
export class PessoasModule { }
