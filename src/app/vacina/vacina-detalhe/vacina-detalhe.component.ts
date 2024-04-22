import { Component, OnInit } from '@angular/core';
import { VacinaService } from '../../shared/service/vacina.service';
import { Vacina } from '../../shared/model/vacina';

@Component({
  selector: 'app-vacina-detalhe',
  templateUrl: './vacina-detalhe.component.html',
  styleUrl: './vacina-detalhe.component.scss'
})

export class VacinaDetalheComponent implements OnInit{

  public vacina: Vacina;

  constructor(private vacinaService: VacinaService) { }



  ngOnInit(): void{

  }

  public salvarNovaVacina(novaVacina: Vacina) {
    this.vacinaService.salvar(novaVacina).subscribe(
      resultado => {
        this.vacina = resultado;
      },
      erro => {
        console.error('Erro ao salvar nova vacina.')
      }
    )
  }

  public consultarVacinaID(idVacina: number) {
    this.vacinaService.consultarVacinaID(idVacina).subscribe(
      resultado => {

      },
      erro => {
        console.error('Erro ao consultar vacina id = ' + idVacina + '.')
      }
    )
  }



}
