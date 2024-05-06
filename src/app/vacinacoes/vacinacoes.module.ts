import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VacinacoesRoutingModule } from './vacinacoes-routing.module';
import { ConsultarTodasVacinacoesComponent } from './consultar-todas-vacinacoes/consultar-todas-vacinacoes.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ConsultarTodasVacinacoesComponent
  ],
  imports: [
    CommonModule,
    VacinacoesRoutingModule,
    FormsModule
  ]
})
export class VacinacoesModule { }
