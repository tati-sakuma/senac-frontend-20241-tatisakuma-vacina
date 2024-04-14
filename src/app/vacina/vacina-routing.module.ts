import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultarTodasComponent } from './consultar-todas/consultar-todas.component';
//import { ExcluirComponent } from './excluir/excluir.component';

const routes: Routes = [
{
  path: "", component: ConsultarTodasComponent
}

// ,{
//   path: "", component: ExcluirComponent
//  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VacinaRoutingModule { }
