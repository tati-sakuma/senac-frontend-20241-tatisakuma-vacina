import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultarTodasComponent } from './consultar-todas-pessoas/consultar-todas.component';
import { PessoaDetalheComponent } from './pessoa-detalhe/pessoa-detalhe.component';

const routes: Routes = [
  { path: '', component: ConsultarTodasComponent },
  { path: 'detalhe', component: PessoaDetalheComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoasRoutingModule { }
