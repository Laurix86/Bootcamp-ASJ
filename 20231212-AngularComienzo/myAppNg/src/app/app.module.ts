import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MiComponenteComponent } from './components/mi-componente/mi-componente.component';
import { ContenidoComponent } from './components/contenido/contenido.component';
import { ListaComponent } from './components/lista/lista.component';
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';
import { NavComponent } from './components/nav/nav.component';
import { OtraWebComponent } from './components/otra-web/otra-web.component';
import { OtroComponenteComponent } from './components/otro-componente/otro-componente.component';


@NgModule({
  declarations: [
    AppComponent,
    MiComponenteComponent,
    ContenidoComponent,
    ListaComponent,
    TarjetaComponent,
    NavComponent,
    OtraWebComponent,
    OtroComponenteComponent
   
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
