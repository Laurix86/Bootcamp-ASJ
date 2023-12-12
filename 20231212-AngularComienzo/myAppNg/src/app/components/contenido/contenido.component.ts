import { Component } from '@angular/core';

@Component({
  selector: 'contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent {
  titulo = "Este es el componente 'Contenido'";
  num = 0;
  flag = false;
  compras = ["Fruta", "Carne", "Bebidas", "Palta", "Helado", "otro"];

  generarAleatorio(){
    this.num = Math.floor(Math.random()*10);
  }
  incrementar(){
    this.num +=1;
  }
  decrementar(){
    this.num -=1;
  }
}
