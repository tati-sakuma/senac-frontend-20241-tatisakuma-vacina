import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vacina } from '../model/vacina';

@Injectable({
  providedIn: 'root'
})
export class VacinaService {
  private readonly API = 'http://localhost:8080/senac-20241-tatisakuma/rest/vacina'

  constructor(private httpClient: HttpClient) { }

  ConsultarTodas (): Observable<Array<Vacina>> {
    return this.httpClient.get<Array<Vacina>>(this.API + '/todas')
  }

  Excluir (id: number): Observable<boolean> {
    return this.httpClient.delete<boolean>(this.API + '/excluir/{1}')
  }

//TODO declarar demais metodos do VacinaController

}
