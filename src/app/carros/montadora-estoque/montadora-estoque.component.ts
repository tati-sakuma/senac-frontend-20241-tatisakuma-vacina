import { Component } from '@angular/core';
import { MontadoraService } from '../../shared/service/montadora.service';
import { Montadora } from '../../shared/model/montadora';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-montadora-estoque',
  templateUrl: './montadora-estoque.component.html',
  styleUrl: './montadora-estoque.component.scss'
})
export class MontadoraEstoqueComponent {
  public montadoras: Array<Montadora> = new Array();
  public idMontadora: number;
  public estoque: number;

  constructor(private montadoraService: MontadoraService,

  ){}

  ngOnInit(): void{
    this.consultarTodas();
  }
  public consultarTodas() {
    this.montadoraService.consultarTodas().subscribe(
      (resultado) => {
        this.montadoras = resultado;
      },
      (erro) => {
        Swal.fire({
                  title: 'Atenção!',
                  text: 'Erro ao consultar todas montadoras: ' + erro.error.mensagem,
                  icon: 'error',
                });
      }
    );
  }

  public consultarEstoqueCarros (idMontadora: number) {
    this.montadoraService.consultarEstoqueCarros(this.idMontadora).subscribe(
      (resultado) => {
        this.estoque = resultado;
        Swal.fire({
          
          text: 'Quantidade em estoque: ' + resultado,
          icon: 'success',
        });
      },
      (erro) => {
        Swal.fire({
          title: 'Atenção!',
          text: 'Erro ao consultar estoque: ' + erro.error.mensagem,
          icon: 'error',
        });
      }
    )
  }

  public compareById (r1: any, r2: any): boolean {
    return r1 && r2 ? r1.id === r2.id : r1 === r2;
  }
}
