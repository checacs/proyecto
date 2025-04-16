import { Component } from '@angular/core';
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-shop',
  imports: [CardComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  bonsai ={
    nombre: 'Junipero',
    precio: '500€',
    variedad: 'Itohigawa',
    origen: 'Japon',
    altura: 'Shohin'
    }
}
