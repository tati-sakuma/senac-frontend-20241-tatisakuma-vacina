import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultarTodasVacinacoesComponent } from './consultar-todas-vacinacoes/consultar-todas-vacinacoes.component';

const routes: Routes = [
  { path: '', component: ConsultarTodasVacinacoesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VacinacoesRoutingModule { }
