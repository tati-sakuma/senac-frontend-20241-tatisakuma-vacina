import { Component, OnInit } from '@angular/core';
import { VacinaService } from '../../shared/service/vacina.service';
import { Vacina } from '../../shared/model/vacina';
import { Pais } from '../../shared/model/pais';
import { PaisService } from '../../shared/service/pais.service';
import { Pessoa } from '../../shared/model/pessoa';
import { PessoasService } from '../../shared/service/pessoas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vacina-detalhe',
  templateUrl: './vacina-detalhe.component.html',
  styleUrl: './vacina-detalhe.component.scss'
})

export class VacinaDetalheComponent implements OnInit{

  public vacina: Vacina = new Vacina();
  public paises: Array<Pais> = [];
  public pesquisadores: Array<Pessoa>;

  constructor(private vacinaService: VacinaService, private paisService: PaisService, private pessoaService: PessoasService) { }

  ngOnInit(): void{
    this.consultarTodosPaises();
    this.consultarPesquisadores();
  }

  public salvarNovaVacina() {
    this.vacinaService.salvar(this.vacina).subscribe(
      resultado => {
        this.vacina = resultado;
        Swal.fire("Vacina salva com sucesso!");

      },
      erro => {
        Swal.fire({
          icon: "error",
          text:"Erro ao salvar nova vacina."
        })
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

  public consultarPesquisadores(){
    this.pessoaService.consultarPesquisadores().subscribe(
      resultado => {
        this.pesquisadores = resultado;
      },
      erro => {
        console.error('Erro ao consultar todos os pesquisadores.')
      }
    )
  }
}
