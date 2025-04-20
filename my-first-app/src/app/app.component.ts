import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./componentes/navbar/navbar.component";
import { FooterComponent } from "./componentes/footer/footer.component";
import { HeaderComponent } from "./componentes/header/header.component";
import { HomeComponent } from "./componentes/home/home.component";
import { ComunidadComponent } from "./componentes/comunidad/comunidad.component";
import {ShopComponent} from "./componentes/shop/shop.component";
/*import { CardComponent } from './componentes/card/card.component';*/
import { GaleriaComponent } from "./componentes/galeria/galeria.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent, HeaderComponent, HomeComponent, ComunidadComponent,
    ShopComponent, GaleriaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-first-app';
}

