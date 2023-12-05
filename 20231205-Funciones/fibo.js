/* Fibonacci

Según un número ingresado por el usuario, mostrar la secuencia de Fibonacci hasta esa cantidad de veces.
Ej: el usuario ingresa el 8, mostrar:
0 1 1 2 3 5 8 13 21 34
 */

const num = parseInt(prompt("Ingresar un número entero: "));


//const fibo = (numero) => (numero <= 1 ? numero : fibo(numero - 1) + fibo(numero - 2));


const fibon = (num) => {
    
    if(num==0 ){
        return 0;
    } else if(num == 1){
        
        return num;
    } else{
        
        return fibon(num-1) + fibon(num-2);
    }
    
}

function mostrarFibonacci(numero){
    let arrFib = [];
    for(let i=0; i <= numero; i++ ){

        arrFib.push(fibon(i));
    }
    alert(arrFib);
   console.log(arrFib);
}

mostrarFibonacci(num); 