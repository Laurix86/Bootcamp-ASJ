
//mensajito
msg = "Hola mundo, estamos arrancando";
alert(msg);

//Cantidad de caracteres

var texto = prompt("Escribir algo para contar los caracteres");
console.log("Se ingresó '" + texto + "' y tiene " + texto.length + " caracteres.");

//Calculadora de edad

var edad = parseInt(prompt("Ingresar edad."));
var cantDias = edad *365;
alert(edad + " años equivale a " + cantDias +" cantidad de días.");

//Suma de Valores

var num1, num2, resultado;
num1 = parseInt(prompt("ingresar un valor para el primer número."));
num2= parseInt(prompt("ingresar un valor para el segundo número."));

console.log("La suma de los valores ingresados es igual a: " +sumarValores(num1, num2));

function sumarValores(num1, num2){
    
    var resultado = num1+num2;
    return resultado
}

//Calculador de abastecimiento de por vida
    //Ejercicio 1

var edad = 37;
var edadMaxima = 73;
var snackFav = "chizitos";
var snacksDiarios = 3;
var abastecimiento = (edadMaxima - edad) * snacksDiarios;
var precioUnidadSnack = 0.03;
alert("Necesitarás "+ abastecimiento + " " + snackFav +  " para que te alcancen hasta los " + edadMaxima + " años.");
console.log("Vas a gastar " + abastecimiento*precioUnidadSnack + " morlacos para cubrir ese abastecimiento.");

    //Ejercicio 2

    var diasViaje = 93;
    var presupuestoMaximo = 333; 
    var comida = diasViaje *3;
    var gastoComida = presupuestoMaximo/comida;
    alert("Podés gastar " + gastoComida +" monedas en cada comida para que te alcanse la plata durante los "+ diasViaje + " días de viaje.")

// ES6
    //Ejercicio 1

let nombre = "Gabriela";
let profesion = "programadora";

console.log(`${nombre} es ${profesion} `);

    //Ejercicio 2

var precioArt = parseFloat(prompt("Ingresar valor del producto"));
var cantArt = parseInt(prompt("Ingresar la cantidad de artículos que va a comprar"));

alert(`Deberá abonar ${precioArt*cantArt} monedas para finalizar su compra`);
