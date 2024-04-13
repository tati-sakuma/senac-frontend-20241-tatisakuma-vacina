import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VacinaRoutingModule } from './vacina-routing.module';
import { ConsultarTodasComponent } from './consultar-todas/consultar-todas.component';
import { ExcluirComponent } from './excluir/excluir.component';

@NgModule({
  declarations: [
    ConsultarTodasComponent
  ],
  imports: [
    CommonModule,
    VacinaRoutingModule
  ],
})
export class VacinaModule {}
