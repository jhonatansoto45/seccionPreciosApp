export interface Card {
  titulo: string;
  plan: string;
  precio: string;
  periodo: Periodo;
}

export enum Periodo {
  mensual = 'mensual',
  anual = 'anual',
}
