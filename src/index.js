import React from 'react'; //Traeme todo lo que haya exportado desde el paquete "react" que está en node_modules (porque no especifiqué la dirección) y guarda ese valor en la variable "React" (con mayuscula)

import Header from "./Header"
import Main from "./Main"

function App() {
    return (
        <>
            <Header/>
            <Main/>
        </>
    )
}

export default App