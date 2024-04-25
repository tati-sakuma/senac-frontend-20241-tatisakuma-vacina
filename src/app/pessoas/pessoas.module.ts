import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PessoasRoutingModule } from './pessoas-routing.module';
import { ConsultarTodasComponent } from './consultar-todas-pessoas/consultar-todas.component';
import { PessoaDetalheComponent } from './pessoa-detalhe/pessoa-detalhe.component';


@NgModule({
  declarations: [
    ConsultarTodasComponent,
    PessoaDetalheComponent

  ],
  imports: [
    CommonModule,
    PessoasRoutingModule
  ]
})
export class PessoasModule { }
