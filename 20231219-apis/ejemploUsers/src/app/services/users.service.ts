import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
//import {Usuario} from '../models/Usuarios'; para utilizarlo como datos


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient){}

  URL_API = 'https://reqres.in/api/users';

  datosUsuario: any = {
    id: -1,
    name: "",
    job: ""
  }

  //GET usuarios
  public getUsers(): Observable<any>{
    return this.http.get(this.URL_API);
  }

  //POST usuario
  public createUser(usuario: any): Observable<any>{
    return this.http.post(this.URL_API, usuario);
  }

  //DELETE usuario
  public deleteUser(id: any){
    return this.http.delete(this.URL_API+"/"+id);
  }

  //PUT usuario
  public updateUser(usuario:any): Observable<any>{
    return this.http.put(this.URL_API+"/"+ this.datosUsuario.id, usuario);
  }
}
