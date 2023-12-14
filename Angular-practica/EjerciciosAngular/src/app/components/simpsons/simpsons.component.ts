import { Component } from '@angular/core';

@Component({
  selector: 'app-simpsons',
  templateUrl: './simpsons.component.html',
  styleUrls: ['./simpsons.component.css']
})
export class SimpsonsComponent {

  //Formulario ingreso
  nameInput: string = "";
  urlImgInput: string = "";
  rolInput: string = "";
  arrPersonajes: Personaje[] = [];

  addSimpson(){
    if(this.nameInput !== "" && this.urlImgInput !== "" && this.rolInput  !== "" )
    {
      this.arrPersonajes.push(new Personaje(this.nameInput.toUpperCase(), this.urlImgInput, this.rolInput.toUpperCase()));
      this.nameInput = "";
      this.urlImgInput = "";
      this.rolInput = "";
      
    }
  
  }

  //Listado show



}

class Personaje{
  namePersonaje: string;
  urlImagen: string;
  rolPersonaje: string;

  constructor(nombre: string, url: string, rol: string)
  {
    this.namePersonaje = nombre;
    this.urlImagen = url;
    this.rolPersonaje = rol
  }
}