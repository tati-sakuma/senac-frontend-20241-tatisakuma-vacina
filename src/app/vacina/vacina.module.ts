import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VacinaRoutingModule } from './vacina-routing.module';
import { ConsultarTodasComponent } from './consultar-todas/consultar-todas.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ConsultarTodasComponent
  ],
  imports: [
    CommonModule,
    VacinaRoutingModule,
    FormsModule
  ],
})

export class VacinaModule {}
