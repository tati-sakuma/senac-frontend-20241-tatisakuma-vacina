import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { JogadorService } from '../../shared/service/jogador.service';
import { Jogador } from '../../shared/model/jogador';
import Swal from 'sweetalert2';
import { PartidaService } from '../../shared/service/partida.service';
import { PartidaSeletor } from '../../shared/model/seletor/partida.seletor';
import { Carta } from '../../shared/model/carta';
import { CartaNaPartida } from '../../shared/model/cartaNaPartida';

@Component({
  selector: 'app-nova-partida',
  templateUrl: './nova-partida.component.html',
  styleUrl: './nova-partida.component.scss',
})
export class NovaPartidaComponent implements OnInit {
  public jogadores: Array<Jogador> = [];
  public idJogador: number = 0;
  public partidaDTO: PartidaSeletor = new PartidaSeletor();
  public jogador: Jogador = new Jogador();
  public cartas: Array<CartaNaPartida> = [];
  public atributos: Array<string> = [];
  public atributoSelecionado: string = '';


  constructor(
    private jogadorService: JogadorService,
    private partidaService: PartidaService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.consultarTodosJogadores();
  }

  public consultarTodosJogadores(): void {
    this.jogadorService.consultarTodosJogadores().subscribe(
      (resultado) => {
        this.jogadores = resultado;
      },
      (erro) => {
        Swal.fire({
          title: 'Atenção!',
          text: 'Erro ao consultar jogadores: ' + erro.error.mensagem,
          icon: 'error',
        });
      }
    );
  }

  public iniciarPartida(): void {
    if (this.idJogador === 0) {
      Swal.fire({
        title: 'Atenção!',
        text: 'Selecione um jogador!',
        icon: 'warning',
      });
    } else {
      this.partidaService.iniciarPartida(this.idJogador).subscribe(
        (resultado) => {
           this.partidaDTO = resultado;
           this.consultarJogadorPorId();
           this.cartas = this.partidaDTO.cartasJogador;
           this.atributos = this.partidaDTO.atributosDisponiveis;

          Swal.fire({
            title: 'Atenção!',
            text: 'Novo X1 #' + this.partidaDTO.idPartida + ' criado para o usuário ' + this.jogador.nome +'!',
            icon: 'success',
          })
        },
        (erro) => {
          Swal.fire({
            title: 'Atenção!',
            text: 'Erro ao iniciar partida: ' + erro.error.mensagem,
            icon: 'error',
          });
        }
      );
    }
  }

  consultarJogadorPorId(): void {
    this.jogadorService.consultarPorId(this.idJogador).subscribe(
      (resultado) => {
        this.jogador = resultado;
      },
      (erro) => {
        Swal.fire({
          title: 'Atenção!',
          text: 'Erro ao consultar por ID: ' + erro.error.mensagem,
          icon: 'error',
        });
      }
    );
  }

  jogarCarta(): void {
    if(this.atributoSelecionado === '') {
      Swal.fire({
        title: 'Atenção!',
        text: 'Selecione um atributo!',
        icon: 'warning',
      });
    }
  }



}
