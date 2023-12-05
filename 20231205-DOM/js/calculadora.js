let calculo = 0;
const uno = document.getElementById("btn1");
const dos = document.getElementById("btn2");
const tres = document.getElementById("btn3");
const cuatro = document.getElementById("btn4");
const cinco = document.getElementById("btn5");
const seis = document.getElementById("btn6");
const siete = document.getElementById("btn7");
const ocho = document.getElementById("btn8");
const nueve = document.getElementById("btn9");
const cero = document.getElementById("btn0");
const borrar = document.getElementById("btnDel");
const suma = document.getElementById("btnSuma");
const resta= document.getElementById("btnResta");
const multip = document.getElementById("btnMult");
const dividir = document.getElementById("btnDiv");
const igual = document.getElementById("btnResult");
const pantalla = document.getElementById("h3Pantalla");
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
igual.addEventListener("click", ()=> resultado() );
borrar.addEventListener("click", ()=> borrarTodo());


let addEscritura = (txt) =>{
    escritura += txt;
    screen(escritura);
}

const borrarTodo = () =>{
    screen("0");
    escritura = "";
}
const tomarDatos = (operando) => {
    calculo = parseInt(escritura);
    escritura = "";
    screen(escritura);
    operacion = operando;
};

const resultado = () => {
    switch(operacion){
        case "+":
            calculo += parseInt(escritura);
            screen(calculo);
            break;
        case "-":
            calculo -= parseInt(escritura);
            screen(calculo);
            break;
        case "/":
            calculo /= parseInt(escritura);
            screen(calculo);
            break;
        case "*":
            calculo *= parseInt(escritura);
            screen(calculo);
            break;
    }
}


const screen = (texto) =>  pantalla.innerText = texto;

