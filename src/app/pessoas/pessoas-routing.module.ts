import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultarTodasComponent } from './consultar-todas-pessoas/consultar-todas.component';

const routes: Routes = [
  {
    path: "", component: ConsultarTodasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoasRoutingModule { }
