import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarroListagemComponent } from './carro-listagem/carro-listagem.component';
import { MontadoraEstoqueComponent } from './montadora-estoque/montadora-estoque.component';

const routes: Routes = [
  { path: 'lista', component: CarroListagemComponent},
  { path: 'montadoras', component: MontadoraEstoqueComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarrosRoutingModule { }
