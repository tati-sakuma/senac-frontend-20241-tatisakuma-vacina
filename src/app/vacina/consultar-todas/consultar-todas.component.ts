import { Component, OnInit } from '@angular/core';
import { VacinaService } from './../../shared/service/vacina.service';
import { Vacina } from '../../shared/model/vacina';
import { VacinaSeletor } from '../../shared/model/seletor/vacina.seletor';

@Component({
  selector: 'app-consultar-todas',
  templateUrl: './consultar-todas.component.html',
  styleUrl: './consultar-todas.component.scss'
})

export class ConsultarTodasComponent implements OnInit {

  public vacinas: Array<Vacina> = new Array();
  public seletor: VacinaSeletor = new VacinaSeletor();

  constructor(private vacinaService: VacinaService) { }

  ngOnInit(): void{
    this.consultarTodasVacinas();
  }

  public consultarTodasVacinas() {
    this.vacinaService.consultarTodasVacinas().subscribe(
      resultado => {
        this.vacinas = resultado;
      },

      erro => {
        console.error('Erro ao consultar todas as vacinas' + erro);
      }
    );
  }

  public pesquisar () {
    this.vacinaService.listarComSeletor(this.seletor).subscribe(
      resultado => {
        this.vacinas = resultado;
      },
      erro => {
        console.error('Erro ao consultar filtro de vacinas', erro);
      }
    )
  }

  public limpar(){
    this.seletor = new VacinaSeletor();
  }
}
