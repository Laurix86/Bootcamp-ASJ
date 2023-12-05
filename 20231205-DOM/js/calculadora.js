let calculo = 0;
let uno = document.getElementById("btn1");
let dos = document.getElementById("btn2");
let tres = document.getElementById("btn3");
let cuatro = document.getElementById("btn4");
let cinco = document.getElementById("btn5");
let seis = document.getElementById("btn6");
let siete = document.getElementById("btn7");
let ocho = document.getElementById("btn8");
let nueve = document.getElementById("btn9");
let cero = document.getElementById("btn0");
let borrar = document.getElementById("btnDel");
let suma = document.getElementById("btnSuma");
let resta= document.getElementById("btnResta");
let multip = document.getElementById("btnMult");
let dividir = document.getElementById("btnDiv");
let igual = document.getElementById("btnResult");
let pantalla = document.getElementById("h3Pantalla");
let escritura ="";
let operacion;
const btnNumero = document.getElementsByClassName("btnNum");


uno.addEventListener("click", ()=> addEscritura("1")) ;
dos.addEventListener("click", ()=> addEscritura("2")) ;
tres.addEventListener("click", ()=> addEscritura("3")) ;
cuatro.addEventListener("click", ()=> addEscritura("4")) ;
cinco.addEventListener("click", ()=> addEscritura("5")) ;
seis.addEventListener("click", ()=> addEscritura("6")) ;
siete.addEventListener("click", ()=> addEscritura("7")) ;
ocho.addEventListener("click", ()=> addEscritura("8")) ;
nueve.addEventListener("click", ()=> addEscritura("9")) ;
cero.addEventListener("click", ()=> addEscritura("0")) ;
suma.addEventListener("click", ()=> tomarDatos("+"));
resta.addEventListener("click", ()=> tomarDatos("-"));
dividir.addEventListener("click", ()=> tomarDatos("/"));
multip.addEventListener("click", ()=> tomarDatos("*"));
igual.addEventListener("click", ()=> resultado() )

let addEscritura = (txt) =>{
    escritura += txt;
    screen(escritura);
}

const tomarDatos = (operando) => {
    calculo = parseInt(escritura);
    escritura = "";
    operacion = operando;
};

const resultado = () => {
    
}


const screen = (texto) =>  pantalla.innerText = texto;

