import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: 'vacina', pathMatch: 'full'},
  {
    path: 'vacina',
    loadChildren:() => import('./vacina/vacina.module').then((m) => m.VacinaModule)
  },

  {path: '', redirectTo: 'pessoa', pathMatch: 'full'},
  {
    path: 'pessoa',
    loadChildren:() => import('./pessoas/pessoas.module').then((m) => m.PessoasModule)
  }

];
