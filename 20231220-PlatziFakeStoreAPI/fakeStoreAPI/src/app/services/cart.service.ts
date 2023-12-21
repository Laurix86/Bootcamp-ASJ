import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  carrito = localStorage.getItem('cart') || []

  getCarrito():any{
    return this.carrito
  }

  addProducto(producto:any){
    localStorage.setItem('cart', producto);
  }

}
