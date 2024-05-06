import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultarTodasComponent } from './consultar-todas/consultar-todas.component';
import { VacinaDetalheComponent } from './vacina-detalhe/vacina-detalhe.component';
//import { ExcluirComponent } from './excluir/excluir.component';

const routes: Routes = [
  { path: '', component: ConsultarTodasComponent },
  { path: 'detalhe', component: VacinaDetalheComponent },
  { path: 'detalhe/:id', component: VacinaDetalheComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VacinaRoutingModule {}
