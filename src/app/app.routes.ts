import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

export const routes: Routes = [
 // {path: '', redirectTo: 'vacina', pathMatch: 'full'},
  {
    path: 'vacina',
    loadChildren:() => import('./vacina/vacina.module').then((m) => m.VacinaModule)
  },

  {
    path: 'pessoa',
    loadChildren:() => import('./pessoas/pessoas.module').then((m) => m.PessoasModule)
  },

  {
    path: 'vacinacao',
    loadChildren:() => import('./vacinacoes/vacinacoes.module').then((m) => m.VacinacoesModule)
  },

  {
    path: 'carro',
    loadChildren:() => import('./carros/carros.module').then((m) => m.CarrosModule)
  },

  {
    path: 'partida',
    loadChildren:() => import('./partidas-x1/partidas-x1.module').then((m) => m.PartidasX1Module)
  },

];
