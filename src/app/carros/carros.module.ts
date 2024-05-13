import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarrosRoutingModule } from './carros-routing.module';
import { CarroListagemComponent } from './carro-listagem/carro-listagem.component';
import { FormsModule } from '@angular/forms';
import { MontadoraEstoqueComponent } from './montadora-estoque/montadora-estoque.component';


@NgModule({
  declarations: [
    CarroListagemComponent,
    MontadoraEstoqueComponent
  ],
  imports: [
    CommonModule,
    CarrosRoutingModule,
    FormsModule
  ]
})
export class CarrosModule { }
