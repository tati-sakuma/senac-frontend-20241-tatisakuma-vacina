import { Component, OnInit } from '@angular/core';
import { Vacinacao } from '../../shared/model/vacinacao';
import { Pessoa } from '../../shared/model/pessoa';
import { PessoasService } from '../../shared/service/pessoas.service';
import { VacinacaoService } from '../../shared/service/vacinacao.service';
import { VacinaService } from '../../shared/service/vacina.service';
import { Vacina } from '../../shared/model/vacina';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vacinacoes-detalhe',
  templateUrl: './vacinacoes-detalhe.component.html',
  styleUrl: './vacinacoes-detalhe.component.scss'
})
export class VacinacoesDetalheComponent implements OnInit{

  public vacinacao: Vacinacao = new Vacinacao();
  public pessoas: Array<Pessoa> = [];
  public vacinas: Array<Vacina> = [];

  constructor(
    private pessoaService: PessoasService,
    private vacinacaoService: VacinacaoService,
    private vacinaService: VacinaService,
  ){}

  ngOnInit(): void {
    this.consultarPessoas();
    this.consultarVacinas();

  }

  salvar(): void {
    this.salvarNovaVacinacao()
    
  }

  salvarNovaVacinacao(): void {
    this.vacinacaoService.salvarNovaVacinacao(this.vacinacao).subscribe(
      (resultado) => {
        this.vacinacao = resultado;
        Swal.fire({
          icon: 'success',
          text: 'Vacinação salva com sucesso!',
        });
      },
      (erro) => {
        Swal.fire({
          icon: 'error',
          text: 'Erro ao salvar nova vacinação: ' + erro.error.mensagem,
        });
        console.error('Erro ao salvar nova vacinação.');
      }
    )
  }

  private consultarVacinas(): void {
    this.vacinaService.consultarTodasVacinas().subscribe(
      (resultado) => {
        this.vacinas = resultado;
      },
      (erro) => {
        Swal.fire('Erro ao consultar todos as vacinas')
      }
    )
  }

  public consultarPessoas(): void {
    this.pessoaService.listarTodas().subscribe(
      (resultado) => {
        this.pessoas = resultado;
      },
      (erro) => {
        console.error('Erro ao consultar todos os usuários.');
      }
    );
  }

}
