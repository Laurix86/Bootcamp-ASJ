import { useEffect, useState } from "react";

function Componente2(){

const [valor, setValor] = useState(0);

const cambiarEstado = ()=>{
    setValor(valor +1);
}

    // cada vez que se renderiza
    useEffect(()=>{
   console.log("Renderizando Componente 2");


    });

    //cuando se renderiza por primera vez
    useEffect(()=>{
        console.log("Renderizando primera vez el  Componente 2");
       
    }, []);

    useEffect(()=>{
        console.log("Cambió el estado valor")
    },[valor]);


    return (
        <div>
            <h3> Soy el componente 3</h3>
            <button onClick={cambiarEstado}>Click</button>
        </div>
    );
}

export default Componente2;