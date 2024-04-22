import { Component, OnInit } from '@angular/core';
import { VacinaService } from './../../shared/service/vacina.service';
import { Vacina } from '../../shared/model/vacina';
import { VacinaSeletor } from '../../shared/model/seletor/vacina.seletor';
import { Pais } from '../../shared/model/pais';
import { PaisService } from '../../shared/service/pais.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-consultar-todas',
  templateUrl: './consultar-todas.component.html',
  styleUrl: './consultar-todas.component.scss'
})

export class ConsultarTodasComponent implements OnInit {

  public vacinas: Array<Vacina> = new Array();
  public seletor: VacinaSeletor = new VacinaSeletor();
  public paises: Array<Pais> = new Array();

  constructor(private vacinaService: VacinaService, private paisService: PaisService) { }

  ngOnInit(): void{
    this.consultarTodasVacinas();
    this.consultarTodosPaises();


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
    this.consultarTodasVacinas();
  }

  public excluir(id: number) {
    Swal.fire({
      title: "Você deseja excluir?",
      text: "Não será possível reverter a exclusão!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Sim, continue!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.vacinaService.excluir(id).subscribe(

          resultado => {
            Swal.fire({
              title: "Excluída!",
              text: "A vacina foi excluída com sucesso!",
              icon: "success"
            });
            this.consultarTodasVacinas();
          },
           erro => {
            Swal.fire({
              title:"Atenção!",
              text: "Erro ao excluir vacina: ",
              icon: "error"
           });

          console.error('Erro ao excluir vacina.')
         }
       )
      }
    });


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

