/*html con nombre y apellido en los input y al hacer click en un botón se muestre en un h1 el nombre y en un h2 el apellido en color rojo*/

let nombre = document.getElementById("name");
let apellido = document.getElementById("apel");
let efecto = document.getElementById("efecto");
let h1Nombre = document.getElementById("h1Nombre");
let h2Apellido = document.getElementById("h2Apellido");


efecto.addEventListener("click", function(){
    h1Nombre.innerText = nombre.value;
    h2Apellido.innerText = apellido.value;
    h2Apellido.style.color = "red";
})

