import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(private ruta: ActivatedRoute){}
  rutaActual = this.ruta;
  consologuear(algo:any){
    console.log(algo);
  }
}
