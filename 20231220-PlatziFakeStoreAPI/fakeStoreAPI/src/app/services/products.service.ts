import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }
  API_URL = 'https://api.escuelajs.co/api/v1/';

  public getProducts(): Observable<any> {
    return this.http.get(this.API_URL);
  }

  public getCategories(): Observable<any> {
    return this.http.get(this.API_URL + '/categories');
  }

  public getSingleProduct(id:number): Observable<any> {
    return this.http.get(this.API_URL +"/"+ id);
  }

  public getSingleCategory(id: number): Observable<any> {
    return this.http.get(this.API_URL + '/categories/'+id);
  }
}

