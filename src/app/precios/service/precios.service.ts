import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Card, Periodo } from '../interface/precios.interface';

@Injectable({
  providedIn: 'root',
})
export class PreciosService {
  changePrice$: Subject<boolean> = new Subject<boolean>();

  private cards: Card[] = [
    {
      titulo: 'Básico',
      plan: 'Plan individual',
      precio: '50',
      periodo: Periodo.mensual,
    },
    {
      titulo: 'Pro',
      plan: 'Plan individual',
      precio: '75',
      periodo: Periodo.mensual,
    },
    {
      titulo: 'Empresas',
      plan: 'Plan para 5 miembros',
      precio: '99',
      periodo: Periodo.mensual,
    },
  ];

  constructor() {}

  get arrayCards() {
    return this.cards;
  }
}
