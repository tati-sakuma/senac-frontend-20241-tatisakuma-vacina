import { Component, OnInit } from '@angular/core';
import { Carro } from '../../shared/model/carro';
import { CarroService } from '../../shared/service/carro.service';
import { CarroSeletor } from '../../shared/model/seletor/carro.seletor';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-carro-listagem',
  templateUrl: './carro-listagem.component.html',
  styleUrl: './carro-listagem.component.scss',
})
export class CarroListagemComponent implements OnInit {
  public carros: Array<Carro> = [];
  public seletor: CarroSeletor = new CarroSeletor();

  constructor(private carroService: CarroService) {}

  ngOnInit(): void{
    this.consultarComFiltros();
  }

  public consultarComFiltros(): void {
    this.carroService.consultarComFiltros(this.seletor).subscribe(
      (resultado) => {
        this.carros = resultado;
        if(this.seletor === null) {
          Swal.fire({
            title: 'Atenção!',
            text: 'Nenhum veículo encontrado',
            icon: 'warning',
          });
        }
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
    this.seletor = new CarroSeletor();
    this.consultarComFiltros();
  }
}
