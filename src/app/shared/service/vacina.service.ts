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

  consultarVacinaID(idVacina: number): Observable<Vacina> {
    return this.httpClient.get<Vacina>(this.API + '/consultar' + idVacina )
  }

  listarComSeletor(seletor: VacinaSeletor ) : Observable<Array<Vacina>> {
    return this.httpClient.post<Array<Vacina>>(this.API + '/filtro', seletor)
  }

  excluir (vacinaId: number): Observable<boolean> {
    return this.httpClient.delete<boolean>(this.API + '/excluir/' + vacinaId)
  }

  salvar(novaVacina: Vacina): Observable<any> {
    return this.httpClient.post(this.API + '/salvar', novaVacina)
  }

  editar(vacinaEditada: Vacina): Observable<any>{
    return this.httpClient.put(this.API + '/alterar', vacinaEditada)
  }

}
