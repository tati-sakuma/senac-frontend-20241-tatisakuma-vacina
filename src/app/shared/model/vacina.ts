import { Data } from "@angular/router";
import { Pessoa } from "./pessoa";
import { Pais } from "./pais";

export interface Vacina {
  id: number;
  nome: string;
  paisOrigem: Pais;
  pesquisadorResponsavel: Pessoa;
  estagio: number;
  dataInicioPesquisa: Data;
  mediaAvaliacao: number;
}
