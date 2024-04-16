import { VacinaService } from './../../shared/service/vacina.service';
import { Component, OnInit } from '@angular/core';
import { Vacina } from '../../shared/model/vacina';
import { CartaSeletor } from '../../shared/model/seletor/vacina-seletor';

@Component({
  selector: 'app-consultar-todas',
  templateUrl: './consultar-todas.component.html',
  styleUrl: './consultar-todas.component.scss'
})

export class ConsultarTodasComponent implements OnInit {

  public vacinas: Vacina[] = [];
  public seletor: CartaSeletor = new CartaSeletor();

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
