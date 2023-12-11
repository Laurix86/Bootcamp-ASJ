const prodInicial = document.getElementsByClassName("prodDetalle")[0];
const productosIndex = document.getElementsByClassName("productos");
for(let p of productosIndex){
    p.addEventListener("click", function(e){
        prodInicial.setAttribute("data-name", e.target.id);
        const h6 = prodInicial.getElementsByTagName("h6")[0];
        h6.setAttribute("name", e.target.id);
        h6.setAttribute("data-value", e.target.id);
    }
)};
