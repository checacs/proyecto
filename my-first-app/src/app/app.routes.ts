import { Component } from '@angular/core';
import { Routes } from '@angular/router';

import { HomeComponent } from './componentes/home/home.component';
import { GaleriaComponent } from './componentes/galeria/galeria.component';
import { PageNotFoundComponent } from './componentes/page-not-found/page-not-found.component';
import { ComunidadComponent } from './componentes/comunidad/comunidad.component';
import { ShopComponent } from './componentes/shop/shop.component';

export const routes: Routes = [

  {path: 'home', component: HomeComponent},
  {path: 'galeria', component: GaleriaComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'comunidad', component: ComunidadComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}

];
