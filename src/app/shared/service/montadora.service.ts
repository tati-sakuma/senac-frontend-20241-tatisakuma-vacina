import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Montadora } from '../model/montadora';

@Injectable({
  providedIn: 'root',
})
export class MontadoraService {
  private readonly API = 'http://localhost:8080/senac-20241-backend-exemplos/rest/montadora';
  constructor(private httpClient: HttpClient) {}

  consultarEstoqueCarros(idMontadora: number): Observable<number> {
    return this.httpClient.get<number>(this.API + '/estoque-carros/' + idMontadora)
  }

  consultarTodas(): Observable<Array<Montadora>> {
    return this.httpClient.get<Array<Montadora>>(this.API + '/todas')
  }

}
