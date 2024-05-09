import { Component, OnInit } from '@angular/core';
import { VacinaService } from './../../shared/service/vacina.service';
import { Vacina } from '../../shared/model/vacina';
import { VacinaSeletor } from '../../shared/model/seletor/vacina.seletor';
import { Pais } from '../../shared/model/pais';
import { PaisService } from '../../shared/service/pais.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultar-todas',
  templateUrl: './consultar-todas.component.html',
  styleUrl: './consultar-todas.component.scss',
})
export class ConsultarTodasComponent implements OnInit {
  public vacinas: Array<Vacina> = new Array();
  public seletor: VacinaSeletor = new VacinaSeletor();
  public paises: Array<Pais> = new Array();
  public readonly TAMANHO_PAGINA: number = 5;
  public totalPaginas: number = 0;

  constructor(
    private vacinaService: VacinaService,
    private paisService: PaisService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.seletor.limite = this.TAMANHO_PAGINA;
    this.seletor.pagina = 1;
    this.pesquisar();
    this.consultarTodosPaises();
    this.contarPaginas();
  }

  // public consultarTodasVacinas(): void {
  //   this.vacinaService.consultarTodasVacinas().subscribe(
  //     (resultado) => {
  //       this.vacinas = resultado;
  //     },

  //     (erro) => {
  //       Swal.fire({
  //         title: 'Atenção!',
  //         text: 'Erro ao consultar todas vacinas: ' + erro.error.mensagem,
  //         icon: 'error',
  //       });
  //     }
  //   );
  // }

  public pesquisar() {
    this.vacinaService.listarComSeletor(this.seletor).subscribe(
      (resultado) => {
        this.vacinas = resultado;
      },
      (erro) => {
        Swal.fire({
          title: 'Atenção!',
          text: 'Erro ao pesquisar: ' + erro.error.mensagem,
          icon: 'error',
        });
      }
    );
  }

  public limpar() {
    this.seletor = new VacinaSeletor();
    this.pesquisar();
  }

  public editar(idVacinaSelecionada: number): void {
    this.router.navigate(['/vacina/detalhe/', idVacinaSelecionada]);
  }

  public excluir(id: number) {
    Swal.fire({
      title: 'Você deseja excluir?',
      text: 'Não será possível reverter a exclusão!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Sim, continue!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.vacinaService.excluir(id).subscribe(
          (resultado) => {
            Swal.fire({
              title: 'Excluída!',
              text: 'A vacina foi excluída com sucesso!',
              icon: 'success',
            });
            this.pesquisar();
          },
          (erro) => {
            Swal.fire({
              title: 'Atenção!',
              text: 'Erro ao excluir vacina: ' + erro.error.mensagem,
              icon: 'error',
            });
          }
        );
      }
    });
  }

  public consultarTodosPaises() {
    this.paisService.consultarTodosPaises().subscribe(
      (resultado) => {
        this.paises = resultado;
      },
      (erro) => {
        Swal.fire({
          title: 'Atenção!',
          text: 'Erro ao consultar países: ' + erro.error.mensagem,
          icon: 'error',
        });
      }
    );
  }

  public contarPaginas() {
    this.vacinaService.contarPaginas(this.seletor).subscribe(
      (resultado) => {
        this.totalPaginas = resultado;
      },
      (erro) => {
        Swal.fire({
          title: 'Atenção!',
          text: 'Erro ao contar paginas: ' + erro.error.mensagem,
          icon: 'error',
        });
      }
    );
  }

  public atualizarPaginacao() {
    this.contarPaginas();
    this.pesquisar();
  }

  public avancarPagina() {
    this.seletor.pagina = this.seletor.pagina + 1;
    this.pesquisar();
  }

  public voltarPagina() {
    this.seletor.pagina = this.seletor.pagina - 1;
    this.pesquisar();
  }

  public irParaPagina(indice: number) {
    this.seletor.pagina = indice;
    this.pesquisar();
  }

  public criarArrayPaginas(): any[] {
    return Array(this.totalPaginas)
      .fill(0)
      .map((x, i) => i + 1);
  }
}
