import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { SobreNosotrosComponent } from './componentes/sobre-nosotros/sobre-nosotros.component';
import { GaleriaComponent } from './componentes/galeria/galeria.component';
import { SuscribeteComponent } from './componentes/suscribete/suscribete.component';
import { PageNotFoundComponent } from './componentes/page-not-found/page-not-found.component';
import { ShopComponent } from './componentes/shop/shop.component';

export const routes: Routes = [
  {path: 'sobre_nosotros', component: SobreNosotrosComponent},
  {path: 'galeria', component: GaleriaComponent},
  {path: 'suscribete', component: SuscribeteComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},
  {path: 'shop', component: ShopComponent}
];
