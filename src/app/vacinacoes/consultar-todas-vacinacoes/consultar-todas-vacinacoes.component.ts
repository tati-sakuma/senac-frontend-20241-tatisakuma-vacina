import { Component, OnInit } from '@angular/core';
import { Vacinacao } from '../../shared/model/vacinacao';
import { VacinacaoService } from '../../shared/service/vacinacao.service';
import Swal from 'sweetalert2';
import { Pessoa } from '../../shared/model/pessoa';
import { PessoasService } from '../../shared/service/pessoas.service';

@Component({
  selector: 'app-consultar-todas-vacinacoes',
  templateUrl: './consultar-todas-vacinacoes.component.html',
  styleUrl: './consultar-todas-vacinacoes.component.scss'
})
export class ConsultarTodasVacinacoesComponent implements OnInit{
  public vacinacoes: Array<Vacinacao> = new Array();
  public pessoas: Array<Pessoa> = [];
  public pessoa: Pessoa = new Pessoa;

  constructor(private vacinacaoService: VacinacaoService,
              private pessoaService: PessoasService,
  ){}

  ngOnInit(): void {
    this.consultarTodasVacinacoes();


  }

  public consultarTodasVacinacoes(): void {
    this.vacinacaoService.consultarTodasVacinacoes().subscribe(
      (resultado) => {
        this.vacinacoes = resultado;
      },
      (erro) => {
        Swal.fire('Erro ao consultar todas as vacinações: ' + erro.error.mensagem)
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

  public consultarPessoaId(idPessoa: number): void {

      this.pessoaService.consultarPessoaId(idPessoa).subscribe(
      (resultado) => {
        this.pessoa = resultado;
      },
      (erro) => {
        Swal.fire('Erro ao consultar pessoa: ' + erro.error.mensagem)
      }
    )
  }

}
