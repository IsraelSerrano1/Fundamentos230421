import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { HablilidadesComponent } from './hablilidades/hablilidades.component';
import { ContactoComponent } from './contacto/contacto.component';
import { BlogComponent } from './blog/blog.component';
import { Articulo1Component } from './articulo1/articulo1.component';
import { Articulo2Component } from './articulo2/articulo2.component';

@NgModule({
  declarations: [
    AppComponent,
    CarruselComponent,
    HablilidadesComponent,
    ContactoComponent,
    BlogComponent,
    Articulo1Component,
    Articulo2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
