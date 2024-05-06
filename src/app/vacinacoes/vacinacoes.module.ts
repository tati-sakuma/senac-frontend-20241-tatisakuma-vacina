import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VacinacoesRoutingModule } from './vacinacoes-routing.module';
import { ConsultarTodasVacinacoesComponent } from './consultar-todas-vacinacoes/consultar-todas-vacinacoes.component';
import { FormsModule } from '@angular/forms';
import { VacinacoesDetalheComponent } from './vacinacoes-detalhe/vacinacoes-detalhe.component';


@NgModule({
  declarations: [
    ConsultarTodasVacinacoesComponent,
    VacinacoesDetalheComponent
  ],
  imports: [
    CommonModule,
    VacinacoesRoutingModule,
    FormsModule
  ]
})
export class VacinacoesModule { }
