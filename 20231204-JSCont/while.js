/* let num = parseInt(prompt("Ingresar un número"));

let contador = 0;
let suma =0, promedio = 0;


if(typeof num != "number"){
    alert("Valor inválido")
}

while(contador < num){
    contador++;
    suma += contador;
    
}

console.log("Contador " + contador);
promedio = suma /contador;

alert(`La sumatoria es = a ${suma} y el promedio es = a ${promedio} `);  */


/* 
Contador De Positivos

En este ejercicio deberás crear un programa que le pida al usuario que ingrese un número entero. El programa terminará cuando 
se ingrese un número negativo.
Al terminar, mostrarle un mensaje con la cantidad de números positivos que ingresó. */

let numero = parseInt(prompt("Ingresar un número entero positivo, cuando quiera finalizar ingrese un número negativo"));

if(typeof numero != "number"){
    alert("Valor inválido")
}

let contPositivos = 0;

while(numero >=0){
    if(numero == 0){
        alert("Ingresó el número cero, por favor ingresar un número positivo o, en su defecto, un número negativo para finalizar.");
    
    }else{
        contPositivos++;
    }
    numero = parseInt(prompt("Ingrese otro número entero, recuerde que cuando quiera finalizar debe ingresar un número negativo"));
}

alert(`Se ingresaron ${contPositivos} números positivos`);