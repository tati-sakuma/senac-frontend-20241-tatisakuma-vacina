import { Component, OnInit } from '@angular/core';
import { VacinaService } from '../../shared/service/vacina.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrl: './excluir.component.scss'
})
export class ExcluirComponent implements OnInit {
  public excluido: boolean;
  private idVacina: Observable<number>;

  constructor(private vacinaService: VacinaService) { }

  ngOnInit(): void{
    this.idVacina.subscribe((id) => {
      this.excluir(id);
    });
  }

  private excluir (id: number) {
    this.vacinaService.Excluir(id).subscribe(
      resultado => {
        this.excluido = resultado;
      },

      erro => {
        console.error('Erro ao consultar todas as vacinas' + erro);
      }
    )
  }

}
