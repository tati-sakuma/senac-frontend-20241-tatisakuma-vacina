import { Data } from "@angular/router";
import { Pessoa } from "./pessoa";
import { Pais } from "./pais";

export class Vacina {
  id: number;
  nome: string;
  paisOrigem: Pais;
  pesquisadorResponsavel: Pessoa;
  estagio: number;
  dataInicioPesquisa: Date;
  mediaAvaliacao: number;
}
