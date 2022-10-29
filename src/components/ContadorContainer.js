import React, {useState} from 'react'
import Contador from './Contador'


const ContadorContainer = () => {

    const estado = useState(0)
    const contador = estado[0]
    const setContador = estado[1]

    let handleClick = () => {

        setContador(contador + 1)
       

    }

  return (
    <Contador 
        handleClick={handleClick}
        contador={contador}
    
    />
  )
}

export default ContadorContainer