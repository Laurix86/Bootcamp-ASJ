import { useState } from "react";
import uno from "../assets/imagenes/uno.jpg";
import dos from "../assets/imagenes/dos.jpg";
import tres from "../assets/imagenes/tres.jpg";
import cuatro from "../assets/imagenes/44.png";
import cinco from "../assets/imagenes/cinco.jpg";
import seis from "../assets/imagenes/seis.jpg";

function Dado() {
  const imgArr = [uno, dos, tres, cuatro, cinco, seis];

  const [num, setNum] = useState(1);

  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const tirarDado = () => {
    setNum(randomNumber(1, 6));
  };

  return (
    <div className="container text-center d-flex flex-column align-items-center">
      <button className="btn btn-primary " onClick={tirarDado}>
        Lanzar Dado
      </button>

      <h2>El número es: {num}</h2>
      <div style={{width:"200px", overflow:"hidden", height:"250px"}}>

        <img
        
        className="img-fluid"
          src={imgArr[num - 1]}
          alt="Dado"
          thumbnail="true"
          rounded="true"
          
        />
      </div>
    </div>
  );
}

export default Dado;
