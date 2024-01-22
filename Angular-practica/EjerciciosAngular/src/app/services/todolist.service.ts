import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {

  constructor(private http: HttpClient) {

   }

  urlBack: string = 'http://localhost:8080/tareas';


  getLista(): Observable<any[]>{

    return this.http.get<any[]>(this.urlBack);

  }

  getListaById(id: number){
    return this.http.get(this.urlBack + "/"+id);
  }

  createTarea(todo: any): Observable<HttpResponse<any>>{
    return this.http.post(this.urlBack,todo, { observe: 'response', responseType: 'text' as 'json'  });
  }

  doneTarea(id:number): Observable<any>{
   
    return this.http.put(this.urlBack + "/hecha/"+ id ,{}, { observe: 'response', responseType: 'text' as 'json'  });
  }


  deleteTarea(id:number): Observable<any>{
    return this.http.put(this.urlBack + "/borrada/"+ id ,{}, { observe: 'response', responseType: 'text' as 'json'  });
  }
}


/*createTask(newTask: { name: string; description: string; state: boolean; }): Observable<HttpResponse<any>> {
    return this.http.post(this.API_URL,newTask, { observe: 'response', responseType: 'text' as 'json'  });
  }*/