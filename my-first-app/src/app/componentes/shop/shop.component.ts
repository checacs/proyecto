import { DataService } from './../../servicios/data.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-shop',
  imports: [],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent implements OnInit{

  producto! : Producto;
  constructor(private DataService: DataService) { }
  ngOnInit(): void {
    this.loadProductos();
  }
  loadProductos() {
    this.DataService.getProductos().subscribe({
      next: (data) => {
        this.bonsai = data;
        console.log(this.bonsai);

        },
        error: (err) => {
          console.error(err);
        },
        complete: () => {
          console.log('Carga de productos completa');
        }
      }
    )
  }

  bonsai = {

  }
  /* bonsai ={
    nombre: 'Bonsais',
    especies: [
      {
        imagen: '../bonsai_2.jpg',
        Nombre: 'Junipero',
        Precio: '500€',
        Variedad: 'Itohigawa',
        Origen: 'Japon',
        Altura: 'Shohin',
        En_venta: true
      },
      {
        imagen: '../bonsai_1.jpg',
        Nombre: 'Gardenia',
        Precio: '500€',
        Variedad: 'Jasminoides',
        Origen: 'España',
        Altura: 'Shohin'
        ,
        En_venta: false
      },
      {
        imagen: '../bonsai_3.jpg',
        Nombre: 'Chaenomeles',
        Precio: '500€',
        Variedad: 'Japonica',
        Origen: 'Japon',
        Altura: 'Mame'
        ,
        En_venta: true
      },
      {
        imagen: '../bonsai-1.jpg',
        Nombre: 'Olmo',
        Precio: '500€',
        Variedad: 'Nirekeyaki',
        Origen: 'España',
        Altura: 'Shohin'
        ,
        En_venta: true
      },
      {
        imagen: '../bonsai-2.jpg',
        Nombre: 'Romero',
        Precio: '500€',
        Variedad: 'Rastrero',
        Origen: 'España',
        Altura: 'Shohin'
        ,
        En_venta: false
      },
      {
        Imagen: '../bonsai-3.jpg',
        nombre: 'Arce',
        precio: '500€',
        variedad: 'Yamamomiji',
        origen: 'Japon',
        altura: 'Mame'
        ,
        En_venta: true
      },
      {
        imagen: '../Arce.jpg',
        nombre: 'Pino',
        precio: '500€',
        variedad: 'Thunmbergii',
        origen: 'España',
        altura: 'Shohin'
        ,
        En_venta: true
      }

    ]
  } */
}
