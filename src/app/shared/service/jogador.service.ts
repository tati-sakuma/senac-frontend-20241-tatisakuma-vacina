import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Jogador } from '../model/jogador';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JogadorService {
  private readonly API = 'http://localhost:8080/senac-20241-backend-exemplos/rest/jogador/'
  constructor(private httpClient: HttpClient) { }

  consultarTodosJogadores(): Observable<Array<Jogador>> {
    return this.httpClient.get<Array<Jogador>>(this.API + 'todos')
  }

  consultarPorId(id: number): Observable<Jogador> {
    return this.httpClient.get<Jogador>(this.API + id)
  }

}
