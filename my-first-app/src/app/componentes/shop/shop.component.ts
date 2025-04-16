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
    nombre: 'Eleagnus',
    precio: '500€',
    variedad: 'Pungens',
    origen: 'Japon',
    altura: 'Shohin'
    }
  bonsai1 ={
    nombre: 'Junipero',
    precio: '500€',
    variedad: 'Itohigawa',
    origen: 'Japon',
    altura: 'Shohin'
      }
  bonsai2 ={
    nombre: 'Gardenia',
    precio: '500€',
    variedad: 'Jasminoides',
    origen: 'España',
    altura: 'Shohin'
  }
  bonsai3 ={
    nombre: 'Chaenomeles',
    precio: '500€',
    variedad: 'Japonica',
    origen: 'Japon',
    altura: 'Mame'
  }
  bonsai4 ={
    nombre: 'Olmo',
    precio: '500€',
    variedad: 'Nirekeyaki',
    origen: 'España',
    altura: 'Shohin'
  }
  bonsai5 ={
    nombre: 'Romero',
    precio: '500€',
    variedad: 'Rastrero',
    origen: 'España',
    altura: 'Shohin'
  }
  bonsai6 ={
    nombre: 'Arce',
    precio: '500€',
    variedad: 'Yamamomiji',
    origen: 'Japon',
    altura: 'Mame'
  }
  bonsai7 ={
    nombre: 'Pino',
    precio: '500€',
    variedad: 'Thunmbergii',
    origen: 'España',
    altura: 'Shohin'
  }
}
