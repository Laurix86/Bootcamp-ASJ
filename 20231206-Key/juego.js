const input = document.getElementById("escrito");
const txt = document.getElementById("mostrar");
let escritura = "";

input.addEventListener("keyup", function(e){
    //escritura += ` ${e.key}`;
    txt.innerText = mostrarSinVocales(e.key);
})

//función superadora resuelve al toque todo
input.addEventListener("keyup", () => {
    //escritura += ` ${e.key}`;

    txt.innerText = input.value.replace(/[aáAÁeéEÉiíIÍoOóÓuúUÚ]/g, '_');
})


const mostrarSinVocales = (letra) =>{
    switch(letra.toUpperCase()){
        case"A": case"E": case"I": case"O": case "U":
            return escritura += "_";
        case "BACKSPACE":
            escritura = escritura.slice(0, escritura.length - 1);
            return escritura; 
        case "SHIFT": case "CONTROL": case "CAPSLOCK": case "ENTER":
            return escritura;
        default:
            return escritura += letra;
            
    }
}