import { Component } from '@angular/core';
import { text } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-proyecto-uno',
  templateUrl: './proyecto-uno.component.html',
  styleUrls: ['./proyecto-uno.component.css']
})
export class ProyectoUnoComponent {
  input_text = "";
  lista: string [] = [];
  
  agregarTarea(){
    this.lista.push(this.input_text.toUpperCase());
    this.input_text = "";
  };
  

}
