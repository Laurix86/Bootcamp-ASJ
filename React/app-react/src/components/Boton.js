import { useState } from "react";

function Boton(){
    const [clicks, setClicks] = useState(0);

    const contar = () => {
         setClicks(clicks +1);
    };

    return(
        <>
            <h2>{clicks}</h2>
            <button onClick={contar}>Click</button>
        </>
    )
}

export default Boton;