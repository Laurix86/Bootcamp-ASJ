let num = parseInt(prompt("Ingrese un número"));


for(let i=1;i<=num; i++ ){
    let signo = "";
    for(let j=1; j<=i;j++){
        signo+= "*";
    } 
    console.log(signo); 
}

for(let i=(num-1);i>=1; i--){
    let signo = "";
 
    for(let j=i; j>=1; j--){
       
        signo+= "*";
    } 
    console.log(signo); 
}