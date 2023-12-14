import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainComponent } from './components/main/main.component';
//FontAwesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProyectoUnoComponent } from './components/proyecto-uno/proyecto-uno.component';
import { ProyectoDosComponent } from './components/proyecto-dos/proyecto-dos.component';
import { ProyectoTresComponent } from './components/proyecto-tres/proyecto-tres.component';
//import { faCoffee } from '@fortawesome/free-solid-svg-icons';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    MainComponent,
    ProyectoUnoComponent,
    ProyectoDosComponent,
    ProyectoTresComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule, 
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  //faCoffee = faCoffee;
 }

/* 
 Agregar opciones para mostrar:
- Todas las tareas
- Tareas Completas
- Tareas Incompletas
- Tareas eliminadas */