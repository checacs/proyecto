import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../common/producto';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  getProductos(): Observable<Producto> {
    return this.http.get<Producto>('data/data.json');
  }
}
