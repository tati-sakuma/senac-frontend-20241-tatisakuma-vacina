import { Component, OnInit } from '@angular/core';
import { Vacinacao } from '../../shared/model/vacinacao';
import { VacinacaoService } from '../../shared/service/vacinacao.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-consultar-todas-vacinacoes',
  templateUrl: './consultar-todas-vacinacoes.component.html',
  styleUrl: './consultar-todas-vacinacoes.component.scss'
})
export class ConsultarTodasVacinacoesComponent implements OnInit{
  public vacinacoes: Array<Vacinacao> = new Array();

  constructor(private vacinacaoService: VacinacaoService,

  ){}

  ngOnInit(): void {
    this.consultarTodasVacinacoes();
  }

  public consultarTodasVacinacoes(): void {
    this.vacinacaoService.consultarTodasVacinacoes().subscribe(
      resultado => {
        this.vacinacoes = resultado;
      },
      erro => {
        Swal.fire('Erro ao consutlar todas as vacinações.')
      }
    )
  }


}
