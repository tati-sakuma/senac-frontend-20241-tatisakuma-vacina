import { VacinaService } from './../../shared/service/vacina.service';
import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { Vacina } from '../../shared/model/vacina';
import { error } from 'console';

@Component({
  selector: 'app-consultar-todas',
  templateUrl: './consultar-todas.component.html',
  styleUrl: './consultar-todas.component.scss'
})

export class ConsultarTodasComponent implements OnInit {
  public vacinas: Vacina[] = [];

  constructor(private vacinaService: VacinaService) { }

  ngOnInit(): void{
    this.consultarTodasVacinas();
  }

  private consultarTodasVacinas() {
    this.vacinaService.ConsultarTodas().subscribe(
      resultado => {
        this.vacinas = resultado;
      },

      erro => {
        console.error('Erro ao consultar todas as vacinas' + erro);
      }
    );
  }
}
