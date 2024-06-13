import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartidasX1RoutingModule } from './partidas-x1-routing.module';
import { NovaPartidaComponent } from './nova-partida/nova-partida.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NovaPartidaComponent,
  ],
  imports: [
    CommonModule,
    PartidasX1RoutingModule,
    FormsModule
  ]
})
export class PartidasX1Module { }
