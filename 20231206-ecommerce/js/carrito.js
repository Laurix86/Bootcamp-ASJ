const cantProductos = localStorage.length;
let arrClaves = [];
let arrPrecios = [];
let total = 0;
const listadoDetalle = document.getElementById("divProd");
const listadoPrecios = document.getElementById("divPrecio");
let liDetalle = document.createElement("li");
let liPrecio = document.createElement("li");
const precioTotal = document.getElementById("precioFinal");

//buscar claves si hay
const traerKeys = (cant) =>{
    
    for(let i = 0; i<cant;i++){
        arrClaves.push(localStorage.key(i));

    }
    return arrClaves;
}

if(cantProductos>0){
    traerKeys(cantProductos);
    total = armarPrecios(arrClaves);

    insertarUl();
}else{
    carroVacio();
}

function carroVacio(){
    listadoDetalle.innerHTML = "";
    listadoPrecios.innerHTML = "";
    liDetalle.textContent = "No hay productos para mostrar";
    liPrecio.textContent = "----";
    total = 0;
    listadoDetalle.appendChild(liDetalle);
    listadoPrecios.append(liPrecio);
}
function insertarUl(){
    for(let i =0; i<cantProductos;i++){
        
        liDetalle.innerText= arrClaves[i];
        listadoDetalle.appendChild(liDetalle);
        liPrecio.innerText= `$${arrPrecios[i]}`;
        listadoPrecios.appendChild(liPrecio);
    }
    precioTotal.innerText = `$${total}`;
}

function armarPrecios(arrClaves){
    let suma = 0;
    for(let i = 0; i<arrClaves.length; i++){
        
        arrPrecios.push(localStorage.getItem(arrClaves[i]));
        suma += parseFloat(localStorage.getItem(arrClaves[i]));
        
    }
    return suma;

}

