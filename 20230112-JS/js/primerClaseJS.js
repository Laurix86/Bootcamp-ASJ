
//mensajito
msg = "Hola mundo, estamos arrancando";
alert(msg);

//Cantidad de caracteres

let texto = prompt("Escribir algo para contar los caracteres");
console.log("Se ingresó '" + texto + "' y tiene " + texto.length + " caracteres.");

//Calculadora de edad

let edad = parseInt(prompt("Ingresar edad."));
let cantDias = edad *365;
alert(edad + " años equivale a " + cantDias +" cantidad de días.");

//Suma de Valores

let num1, num2, resultado;
num1 = parseInt(prompt("ingresar un valor para el primer número."));
num2= parseInt(prompt("ingresar un valor para el segundo número."));

console.log("La suma de los valores ingresados es igual a: " +sumarValores(num1, num2));

function sumarValores(num1, num2){
    
    let resultado = num1+num2;
    return resultado
}

//Calculador de abastecimiento de por vida
    //Ejercicio 1

let edadActual = 37;
let edadMaxima = 73;
let snackFav = "chizitos";
let snacksDiarios = 3;
let abastecimiento = (edadMaxima - edadActual) * snacksDiarios;
let precioUnidadSnack = 0.03;
alert("Necesitarás "+ abastecimiento + " " + snackFav +  " para que te alcancen hasta los " + edadMaxima + " años.");
console.log("Vas a gastar " + abastecimiento*precioUnidadSnack + " morlacos para cubrir ese abastecimiento.");

    //Ejercicio 2

    let diasViaje = 93;
    let presupuestoMaximo = 333; 
    let comida = diasViaje *3;
    let gastoComida = presupuestoMaximo/comida;
    alert("Podés gastar " + gastoComida +" monedas en cada comida para que te alcanse la plata durante los "+ diasViaje + " días de viaje.")

// ES6
    //Ejercicio 1

let nombre = "Gabriela";
let profesion = "programadora";

console.log(`${nombre} es ${profesion} `);

    //Ejercicio 2

let precioArt = parseFloat(prompt("Ingresar valor del producto"));
let cantArt = parseInt(prompt("Ingresar la cantidad de artículos que va a comprar"));

alert(`Deberá abonar ${precioArt*cantArt} monedas para finalizar su compra`);
