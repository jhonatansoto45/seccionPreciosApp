import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PreciosModule } from './precios/precios.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PreciosModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
