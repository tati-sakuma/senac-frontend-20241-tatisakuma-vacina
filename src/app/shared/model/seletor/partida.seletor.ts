import { CartaNaPartida } from "../cartaNaPartida";

export class PartidaSeletor {
  idPartida: number;
  cartasJogador: Array<CartaNaPartida>;
  atributosDisponiveis: Array<string>;
  resultadoUltimaJogada: string;
}
