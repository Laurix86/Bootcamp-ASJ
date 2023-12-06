const input = document.getElementById("escrito");
const txt = document.getElementById("mostrar");
let escritura = "";

input.addEventListener("keyup", function(e){
    //escritura += ` ${e.key}`;
    txt.innerText = mostrarSinVocales(e.key);
})


const mostrarSinVocales = (letra) =>{
    switch(letra.toUpperCase()){
        case"A": case"E": case"I": case"O": case "U":
            console.log("vocal");
            return escritura += "_";
        case "BACKSPACE":
            escritura = escritura.slice(0, escritura.length - 1);
            return escritura; 
        case "SHIFT": case "CONTROL": case "CAPSLOCK": case "ENTER":
            return escritura;
        default:
            console.log("otra letra");
            return escritura += letra;
            
    }
}