function Componente1({texto, color}){
    return(
        <>
        <h1>
            Hola gente!
        </h1>
        <em>
            Estamos jugando con React
        </em>

        <h5 style={{color: color}}>{texto}</h5>
        </>
    )
}

export default Componente1;