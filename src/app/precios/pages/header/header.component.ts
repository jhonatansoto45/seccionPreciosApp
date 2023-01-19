import { Component } from '@angular/core';
import { PreciosService } from '../../service/precios.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  switch: boolean = false;

  constructor(private preciosService: PreciosService) {}

  cambiarPrecios(): void {
    this.preciosService.changePrice$.next(!this.switch);
  }
}
