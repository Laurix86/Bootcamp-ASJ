import { Component } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  //constructor(private ruta: ActivatedRoute){};
  constructor(private router: Router){};
  rutaActual = this.router;
  
 /*  rutaActual(btnSelected: string): boolean{
    return btnSelected === this.router.url;
  }
   */
  
  //rutaActual= this.ruta.snapshot;
  checkRoute(myRoute:string):boolean{
    
    return this.rutaActual.routerState.snapshot.url === myRoute;
  }
  
}

