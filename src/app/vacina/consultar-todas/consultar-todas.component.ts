import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';

export interface Vacina {
  id: number;
  nome: string;
  pais: string;
  pessoa: string;
  estagio: number;
  dataInicia: Data;
  media: number;
}

@Component({
  selector: 'app-consultar-todas',
  templateUrl: './consultar-todas.component.html',
  styleUrl: './consultar-todas.component.scss'
})

export class ConsultarTodasComponent {

  constructor() { }

  ngOnInit(): void{

  }
}
