import { useEffect, useState } from "react";
import UsuarioItem from "./UsuarioItem";

function Usuarios(){


    const [usuarios,setUsuarios] = useState([]);

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((respuesta)=> respuesta.json())
        .then((data)=> setUsuarios(data))
        .catch((error)=> console.log(error))
    }, [])
    return(
        <div>
            
                <ul>
                    {usuarios.map((u, index)=>
                       <UsuarioItem usuario={u}/>
                    )}
                </ul>
            
        </div>
    )
}

export default Usuarios;