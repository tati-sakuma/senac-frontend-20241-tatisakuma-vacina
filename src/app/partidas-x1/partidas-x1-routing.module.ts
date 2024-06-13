import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NovaPartidaComponent } from './nova-partida/nova-partida.component';
import { RealizarJogadaComponent } from './realizar-jogada/realizar-jogada.component';

const routes: Routes = [
  {path: '', component: NovaPartidaComponent},
  {path: 'jogar', component: RealizarJogadaComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartidasX1RoutingModule { }
