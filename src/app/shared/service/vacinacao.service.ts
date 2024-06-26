import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vacinacao } from '../model/vacinacao';

@Injectable({
  providedIn: 'root'
})
export class VacinacaoService {

  private readonly API = 'http://localhost:8080/senac-20241-tatisakuma/rest/vacinacao'

  constructor(private httpClient: HttpClient) { }

  consultarTodasVacinacoes(): Observable<Array<Vacinacao>> {
    return this.httpClient.get<Array<Vacinacao>>(this.API + '/todas')
  }

  consultarVacinacaoId(idVacinacao: number): Observable<Vacinacao> {
    return this.httpClient.get<Vacinacao>(this.API + 'consultar/vacina/' + idVacinacao)
  }

  salvarNovaVacinacao(novaVacinacao: Vacinacao): Observable<Vacinacao> {
    return this.httpClient.post<Vacinacao>(this.API + '/salvar', novaVacinacao)
  }




}
