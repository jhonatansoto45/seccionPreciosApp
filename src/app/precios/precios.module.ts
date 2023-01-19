import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './pages/header/header.component';
import { CardsComponent } from './pages/cards/cards.component';

@NgModule({
  declarations: [HeaderComponent, CardsComponent],
  imports: [CommonModule, FormsModule],
  exports: [HeaderComponent, CardsComponent],
})
export class PreciosModule {}
