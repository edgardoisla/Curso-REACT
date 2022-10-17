import React from "react"

function Saludo(greeting) {
    
    let nombreCompleto = greeting.nombre + " " + greeting.apellido

    return (
        
        <p>Bienvenido {nombreCompleto}!</p>
            
    )
}

export default Saludo