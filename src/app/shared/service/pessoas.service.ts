import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pessoa } from '../model/pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {
  private readonly API = 'http://localhost:8080/senac-20241-tatisakuma/rest/pessoa'

  constructor(private httpClient: HttpClient) { }

  listarTodas(): Observable<Array<Pessoa>>{
    return this.httpClient.get<Array<Pessoa>>(this.API + '/todas');
  }

  salvar(novaPessoa: Pessoa): Observable<any> {
    return this.httpClient.post(this.API + '/salvar', novaPessoa)
  }

  consultarPesquisadores(): Observable<Array<Pessoa>>{
    return this.httpClient.get<Array<Pessoa>>(this.API + '/pesquisadores');
  }

}
