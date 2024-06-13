import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PartidaSeletor } from '../model/seletor/partida.seletor';

@Injectable({
  providedIn: 'root'
})
export class PartidaService {

  private readonly API = 'http://localhost:8080/senac-20241-backend-exemplos/rest/partida'
  constructor(private httpClient: HttpClient) { }

  iniciarPartida (idJogador: number): Observable<PartidaSeletor> {
    return this.httpClient.get<PartidaSeletor>(this.API + "/iniciar/" + idJogador)
  }

}
