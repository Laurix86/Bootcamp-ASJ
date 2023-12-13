import { Component } from '@angular/core';

@Component({
  selector: 'otro-componente',
  templateUrl: './otro-componente.component.html',
  styleUrls: ['./otro-componente.component.css'],
 
    

})
export class OtroComponenteComponent {
  hoy = new Date().toDateString();
  
  cartel(){ 
      alert(`Hoy es ${this.hoy}`)
   }
}
