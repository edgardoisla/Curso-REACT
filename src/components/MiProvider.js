import { createContext, useState } from 'react';

export const contexto = createContext()  // Se crea el contexto o "caja vacía" que va a compartir su contenido al resto de los componentes

const { Provider } = contexto;  // El provider es quien le da valor al contexto y a la vez lo comparte al resto de los componentes hijos.


const MiProvider = ({children}) => {
    const [carrito, setCarrito] = useState(
        
        [
            {id: 1, nombre: "Manguera", precio: 150, cantidad: 5},
            {id: 3, nombre: "Codo L", precio: 250, cantidad: 9}
        ],
        
    )

    const [total, setTotal] = useState(5)

    const vaciarCarrito = () => {
        setCarrito([])
        setTotal(0)
    }

    const valorContexto ={
        productos : carrito,
        cantidad : total,
        vaciarCarrito : vaciarCarrito
    }

  return (
    <Provider value={valorContexto}>
    {children}
    </Provider>
  )
}

export default MiProvider