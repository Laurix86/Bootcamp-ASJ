let num = parseInt(prompt("Ingresar un número entero"));
let factorial = 1;
for(i = num; i>=1; i--){
    factorial *=i;
}
console.log(`El factorial de ${num} es ${factorial}`);