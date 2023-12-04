/* FizzBuzz

En este ejercicio deberás escribir un programa que imprima en la consola los números del 1 al 100, 
teniendo en cuenta estos criterios:

Si el número es múltiplo de 3, deberá imprimir "Fizz" en vez del número.
Si es múltiplo de 5, deberá imprimir "Buzz".
Si es múltiplo de 3 y de 5 (a la misma vez), deberá imprimir "FizzBuzz". */

let num = 1;

do{
   
    if (num%3 == 0 && num%5 == 0){
            console.log(`El número ${num} es múltiplo de 3 y de 5 ======> FizzBuzz`);
        } else if (num%3 ==0){
            console.log(`El número ${num} es múltiplo de 3 ======> Fizz`);
            } else if (num%5 == 0){
                console.log(`El número ${num} es múltiplo de 5 ======> Buzz`);
                }else {
                    console.log(`El número ${num} no es múltiplo ni de 3 ni de 5.`);
                }
    num++;
    
}while(num<=100);