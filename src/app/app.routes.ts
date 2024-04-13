import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: 'vacina', pathMatch: 'full'},
  {
    path: 'cartas',
    loadChildren:() => import('./vacina/vacina.module').then(m => m.VacinaModule)
  }
];
