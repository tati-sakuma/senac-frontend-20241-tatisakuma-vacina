import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../../shared/model/pessoa';
import { PessoasService } from '../../shared/service/pessoas.service';

@Component({
  selector: 'app-consultar-todas',
  templateUrl: './consultar-todas.component.html',
  styleUrl: './consultar-todas.component.scss'
})
export class ConsultarTodasComponent implements OnInit {
  public pessoas: Pessoa[] = [];

  constructor(private pessoaService: PessoasService) { }

  ngOnInit(): void {
    this.consultarTodasPessoas();
  }

  private consultarTodasPessoas () {
    this.pessoaService.listarTodas().subscribe(
      resultado => {
        this.pessoas = resultado;
      },
      erro => {
        console.error('Erro ao consultar ', erro);
      }
    );
  }
}
