import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vacina } from '../model/vacina';
import { VacinaSeletor } from '../model/seletor/vacina.seletor';

@Injectable({
  providedIn: 'root'
})
export class VacinaService {
  private readonly API = 'http://localhost:8080/senac-20241-tatisakuma/rest/vacina'

  constructor(private httpClient: HttpClient) { }

  consultarTodasVacinas (): Observable<Array<Vacina>> {
    return this.httpClient.get<Array<Vacina>>(this.API + '/todas')
  }

  excluir (vacinaId: number): Observable<boolean> {
    return this.httpClient.delete<boolean>(this.API + '/excluir/' + vacinaId)
  }

  listarComSeletor(seletor: VacinaSeletor ) : Observable<Array<Vacina>> {
    return this.httpClient.post<Array<Vacina>>(this.API + '/filtro', seletor)
  }


//TODO declarar demais metodos do VacinaController

}
