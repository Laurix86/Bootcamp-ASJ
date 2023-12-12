import { Component } from '@angular/core';

@Component({
  selector: 'tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent {
  imagenes = [
    "../../../assets/reloj(1).jpg",
    "../../../assets/reloj(2).jpg",
    "../../../assets/reloj(3).jpg"
  ]

  titulos = ["Reloj 01", "Reloj 02", "Reloj 03"];
}
