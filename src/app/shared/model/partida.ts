import { CartaNaPartida } from "./cartaNaPartida";
import { Jogador } from "./jogador";
import { Resultado } from "./resultado.enum";

export class Partida {
  id: number;
  jogador: Jogador;
  cartasJogador: Array<CartaNaPartida>;
  cartasCpu: Array<CartaNaPartida>;
  roundsVencidosJogador: number;
  roundsVencidosCpu: number;
  roundsEmpatados: number;
  resultado: Resultado;
  data: Date;
  jogouForca: boolean;
  jogouInteligencia: boolean;
  jogouVelocidade: boolean;
}
