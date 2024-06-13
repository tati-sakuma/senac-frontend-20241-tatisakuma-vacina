import { Carta } from "./carta";

export class CartaNaPartida{
  id: number;
  idPartida: number;
  carta: Carta;
  pertenceAoJogador: boolean;
  utilizada: boolean;
}
