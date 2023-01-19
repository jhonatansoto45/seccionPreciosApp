import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Card, Periodo } from '../../interface/precios.interface';
import { PreciosService } from '../../service/precios.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  arrayCards: Card[] = [];
  changePrice!: Subscription;

  constructor(private preciosService: PreciosService) {}

  ngOnInit(): void {
    this.arrayCards = this.cards;
    this.changePrice = this.preciosService.changePrice$.subscribe(
      (isChangePlan) => this.changePlan(isChangePlan)
    );
  }

  get cards() {
    return [...this.preciosService.arrayCards];
  }

  changePlan(planChange: boolean): void {
    this.cards[0].precio = planChange ? '360' : '50';
    this.cards[0].periodo = planChange ? Periodo.anual : Periodo.mensual;
    this.cards[1].precio = planChange ? '540' : '75';
    this.cards[1].periodo = planChange ? Periodo.anual: Periodo.mensual;
    this.cards[2].precio = planChange ? '713' : '99';
    this.cards[2].periodo = planChange ? Periodo.anual: Periodo.mensual;
  }
}
