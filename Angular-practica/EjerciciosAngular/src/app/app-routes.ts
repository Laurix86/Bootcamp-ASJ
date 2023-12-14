import { RouterModule, Routes } from "@angular/router";
//Importar componentes
import {MainComponent} from './components/main/main.component';
import {ProyectoUnoComponent} from './components/proyecto-uno/proyecto-uno.component';
import { SimpsonsComponent } from "./components/simpsons/simpsons.component";
import { ProyectoTresComponent } from "./components/proyecto-tres/proyecto-tres.component";


const routes: Routes = [
    {path: 'inicio', component: MainComponent},
    {path: 'todoList', component: ProyectoUnoComponent},
    {path: 'simpsons', component: SimpsonsComponent},
    {path: 'proyectoTres', component: ProyectoTresComponent},
    /// otras rutas
    {path: '**', pathMatch:'full', redirectTo: 'MainComponent'},
];

export const routing = RouterModule.forRoot(routes);

//ng g m app-routing --flat --module=app para crearlo por consola
