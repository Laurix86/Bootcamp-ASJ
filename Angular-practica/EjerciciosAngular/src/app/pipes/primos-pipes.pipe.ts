import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'primosPipes'
})
export class PrimosPipesPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let primosArr = [];

    
    primosArr = value.filter((val: any) => (esPrimo(val)));
    return primosArr;
    
    
  
  }

}

function esPrimo(numero: any){
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return numero !== 1;
}