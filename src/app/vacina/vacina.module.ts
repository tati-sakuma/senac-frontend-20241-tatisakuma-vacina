import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VacinaRoutingModule } from './vacina-routing.module';
import { ConsultarTodasComponent } from './consultar-todas/consultar-todas.component';
import { FormsModule } from '@angular/forms';
import { VacinaDetalheComponent } from './vacina-detalhe/vacina-detalhe.component';

@NgModule({
  declarations: [
    ConsultarTodasComponent,
    VacinaDetalheComponent
  ],
  imports: [
    CommonModule,
    VacinaRoutingModule,
    FormsModule,

  ],
})

export class VacinaModule {}
