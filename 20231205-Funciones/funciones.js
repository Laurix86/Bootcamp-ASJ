const menu = "Las opciones de menú del día son: \n1 - Milanesas con puré - $7.500 \n2- Lasagna - $8.300 \n3- Tallarines - $6.150 \n4- Pechuga grillada con ensalada mixta - $5.800";
const bebida = "Para beber puede elegir entre: \n1- Agua - $430 \n2- Vino - $550 \n3- Limonada - $475 \n4- Cerveza - $500";
const postre = "Para postre hoy tenemos: \n1- Helado - $350 \n2- Flan - $400 \n3- Milkshake - $375";
const opciones = "Cómo puedo servirle? Elija el número de la opción elegida: \n1- Menú de comidas - \n2- Lista de bebidas - \n3- Elegir un postre - \n4- Charla trivial - \n5- Escuchar un chiste -\n6- Pedir la cuenta - \n7- No quiero nada, ya me voy.";
const chiste = "Algo gracioso";
const charla = "Una conversación";
const msgMozo = "Excelente elección, que lo disfrute!";
let op;
let numMenu = 0;
let cuenta = 0;
let propina = 0;

const inicio = () => {
    op = parseInt(prompt(opciones));
    if(op >= 1 && op <= 7){
        fxMenu(op);

    }



}

const fxMenu = (opt)=>{
    switch(opt){
        case 1: fxMenuComida();
            break;
        case 2: fxBebidas();
            break;
        case 3: fxPostres();
            break;
        case 4:
            alert(charla);
            break;
        case 5:
            alert(chiste);
            break;
        case 6: 
            propina = parseInt(prompt(`Su cuenta es de \$${ticket()}, Cuánto quiere agregar de propina?`));
            pagado(propina);
        
        }
}

const fxMenuComida = () =>{
    numMenu = parseInt(prompt(menu));
    switch (numMenu){
        case 1: 
            alert(msgMozo);
            ticket(7500);
            break;
        case 2: 
            alert(msgMozo);
            ticket(8300);
            break;
        case 3: 
            alert(msgMozo);
            ticket(6150);
            break;
        case 4: 
            alert(msgMozo);
            ticket(5800);
            break;
        default: 
            alert("Disculpe, esa opción no está disponible por el momento.");
            break;
    }
}

const fxBebidas = () => {
    numMenu = parseInt(prompt(bebida));
    switch (numMenu){
        case 1: 
            alert(msgMozo);
            ticket(430);
            break;
        case 2: 
            alert(msgMozo);
            ticket(550);
            break;
        case 3: 
            alert(msgMozo);
            ticket(475);
            break;
        case 4: 
            alert(msgMozo);
            ticket(500);
            break;
        default: 
            alert("Disculpe, esa opción no está disponible por el momento.");
            break;
    }
}

const fxPostres = () =>{
    numMenu = parseInt(prompt(postre));
    switch (numMenu){
        case 1: 
            prompt(msgMozo);
            ticket(350);
            break;
        case 2: 
            prompt(msgMozo);
            ticket(400);
            break;
        case 3: 
            prompt(msgMozo);
            ticket(375);
            break;
        default: 
            prompt("Disculpe, esa opción no está disponible por el momento.");
            break;
    }
}

const ticket = (value =0)=>{
    return cuenta += value;
}

const pagado = (prop)=> {
    alert(`Su cuenta total es \$${ticket(prop)}. Muchas gracias por su visita, esperamos volver a verlo pronto.`);
    
    op= 0;
    cuenta = 0;
    propina = 0;
}