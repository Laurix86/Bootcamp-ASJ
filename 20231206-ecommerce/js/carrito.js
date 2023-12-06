const cantProductos = localStorage.length;
let arrClaves = [];
let arrPrecios = [];
let total = 0;

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

}else{

}




function armarPrecios(arrClaves){
    let suma = 0;
    for(let i = 0; i<arrClaves.length; i++){
        
        arrPrecios.push(localStorage.getItem(arrClaves[i]));
        suma += parseFloat(localStorage.getItem(arrClaves[i]));
        
    }
    return suma;

}