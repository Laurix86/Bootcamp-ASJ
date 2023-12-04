let num = parseInt(prompt("Ingresar un número entero"));
num = num%2== 0;


switch (num){
    case true:
        alert("El número ingresado es par.");
        break;
    case false:
        alert("El número ingresado es impar.");
        break;
    default:
        alert("Ha ocurrido un error.");
        break;
}

//

let palabra = prompt("Ingresar un número entero");

switch(palabra.toLowerCase()){
    case "casa":
        alert("House");
        break;
    case "perro":
        alert("Dog");
        break;
    case "pelota":
        alert("Ball");
        break;
    case "árbol":
        alert("Tree");
        break;
    case "genio":
        alert("Genie");
        break;
    default: alert("La palabra ingresada es incorrecta.");
}

//

let calificacion = prompt("Califique la película como -Muy Mala -Mala -Mediocre -Buena -Muy Buena");

switch(calificacion.toLowerCase()){
    case "muy mala":
        alert("Una pena que no te haya gustado.");
        break;
    case "mala":
        alert("Al menos no fue muy mala.");
        break;
    case "mediocre":
        alert("Hacé una peli vos y comparamos.");
        break;
    case "buena":
        alert("Qué bueno que te gustó.");
        break;
    case "muy buena":
        alert("No hace falta que mientas, no era para tanto y no damos premios por la votación.");
        break;
    default:
        alert("Ingresaste un valor inválido.");
        break;

}

// 
const fibonacci = (n) => (n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2));