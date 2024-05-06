import { Data } from "@angular/router";
import { Vacina } from "./vacina";
import { Pessoa } from "./pessoa";

export class Vacinacao {
  id: number
  pessoa: Pessoa;
  vacina: Vacina;
  data: Data;
  avaliacao: number;
}
