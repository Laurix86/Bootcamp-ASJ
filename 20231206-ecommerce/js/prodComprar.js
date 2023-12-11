const producto = document.getElementsByClassName("prodDetalle")[0].dataset.name;
const cosa = document.getElementById(producto);
z

cosa.addEventListener("click", ()=>{
   
    const precioCosa = document.getElementsByName(cosa.id)[0];
    console.log(cosa.id, precioCosa.dataset.value);
    guardar(cosa.id, precioCosa.dataset.value)
    if (window.confirm("Quieres ir al carrito?")) {
        window.open("carrito.html", "Seguir comprando");
      }
});

const guardar = (clave, valor) => {
    localStorage.setItem(clave, valor);
}