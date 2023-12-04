let menu = "Las opciones de menú del día son: \n1 - Milanesas con puré - $7.500 \n2- Lasagna - $8.300 \n3- Tallarines - $6.150 \n4- Pechuga grillada con ensalada mixta - $5.800";
let bebida = "Para beber puede elegir entre: \n1- Agua - $430 \n2- Vino - $550 \n3- Limonada - $475 \n4- Cerveza - $500";
let postre = "Para postre hoy tenemos: \n1- Helado - $350 \n2- Flan - $400 \n3- Milkshake - $375";
let opciones = "Cómo puedo servirle? Elija el número de la opción elegida: \n1- Menú de comidas - \n2- Lista de bebidas - \n3- Elegir un postre - \n4- Charla trivial - \n5- Escuchar un chiste -\n6- Pedir la cuenta - \n7- No quiero nada, ya me voy.";
let chiste = "Algo gracioso";
let charla = "Una conversación";
let msgMozo = "Excelente elección, que lo disfrute!";
let op;
let numMenu = 0;
let cuenta = 0;
let propina = 0;


alert(`Bienvenido al barcito - `);


do{
    op = parseInt(prompt(opciones));
    if(op >= 1 && op <= 7){

        switch(op){
            case 1: 
                numMenu = parseInt(prompt(menu));
                switch (numMenu){
                    case 1: 
                        alert(msgMozo);
                        cuenta += 7500;
                        break;
                    case 2: 
                        alert(msgMozo);
                        cuenta += 8300;
                        break;
                    case 3: 
                        alert(msgMozo);
                        cuenta += 6150;
                        break;
                    case 4: 
                        alert(msgMozo);
                        cuenta += 5800;
                        break;
                    default: 
                        alert("Disculpe, esa opción no está disponible por el momento.");
                        break;
                }
                break;
            case 2: 
                numMenu = parseInt(prompt(bebida));
                switch (numMenu){
                    case 1: 
                        alert(msgMozo);
                        cuenta += 430;
                        break;
                    case 2: 
                        alert(msgMozo);
                        cuenta += 550;
                        break;
                    case 3: 
                        alert(msgMozo);
                        cuenta += 475;
                        break;
                    case 4: 
                        alert(msgMozo);
                        cuenta += 500;
                        break;
                    default: 
                        alert("Disculpe, esa opción no está disponible por el momento.");
                        break;
                }
                break;
            case 3:
                numMenu = parseInt(prompt(postre));
                switch (numMenu){
                    case 1: 
                        prompt(msgMozo);
                        cuenta += 350;
                        break;
                    case 2: 
                        prompt(msgMozo);
                        cuenta += 400;
                        break;
                    case 3: 
                        prompt(msgMozo);
                        cuenta += 375;
                        break;
                    default: 
                        prompt("Disculpe, esa opción no está disponible por el momento.");
                        break;
                }
                break;
            case 4:
                alert(charla);
                break;
            case 5:
                alert(chiste);
                break;
            case 6: 
                propina = parseInt(prompt(`Su cuenta es de \$${cuenta}, Cuánto quiere agregar de propina?`));
                alert(`Su cuenta total es \$${cuenta+propina}. Muchas gracias por su visita, esperamos volver a verlo pronto.`);
                op = 0;
                cuenta = 0;
                propina = 0;
                break;
            case 7:
                if(cuenta >0){
                    alert("Por favor pague la cuenta antes de retirarse.");
                    break;
                }else {
                    alert("Gracias, vuelvas prontos!");
                    op=0;
                    
                    break;
                }
                
            default: 
                op = parseInt(prompt("Disculpe, no entendí su elección. \n" + opciones));
                break;
        }
        
    }else{
        
        op = parseInt(prompt(opciones));
    }
}while(op != 0);