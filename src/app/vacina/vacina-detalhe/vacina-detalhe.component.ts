import { Component, OnInit } from '@angular/core';
import { VacinaService } from '../../shared/service/vacina.service';
import { Vacina } from '../../shared/model/vacina';
import { Pais } from '../../shared/model/pais';
import { PaisService } from '../../shared/service/pais.service';

@Component({
  selector: 'app-vacina-detalhe',
  templateUrl: './vacina-detalhe.component.html',
  styleUrl: './vacina-detalhe.component.scss'
})

export class VacinaDetalheComponent implements OnInit{

  public vacina: Vacina = new Vacina();
  public paises: Array<Pais> = [];

  constructor(private vacinaService: VacinaService, private paisService: PaisService) { }

  ngOnInit(): void{
    this.consultarTodosPaises();
  }

  public salvarNovaVacina() {
    this.vacinaService.salvar(this.vacina).subscribe(
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

  public consultarTodosPaises() {
    this.paisService.consultarTodosPaises().subscribe(
      resultado => {
        this.paises = resultado;
      },
       erro => {
      console.error('Erro ao consultar todos os países.')
     }
    )
  }

}
