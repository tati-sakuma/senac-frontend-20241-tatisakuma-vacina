import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultarTodasVacinacoesComponent } from './consultar-todas-vacinacoes/consultar-todas-vacinacoes.component';
import { VacinacoesDetalheComponent } from './vacinacoes-detalhe/vacinacoes-detalhe.component';

const routes: Routes = [
  { path: '', component: ConsultarTodasVacinacoesComponent },
  { path: 'detalhe', component: VacinacoesDetalheComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VacinacoesRoutingModule { }
