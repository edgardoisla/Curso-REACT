import { createContext, useState, useContext } from 'react';

export const contexto = createContext()  // Se crea el contexto o "caja vacía" que va a compartir su contenido al resto de los componentes

const {Provider} = contexto;  // El provider es quien le da valor al contexto y a la vez lo comparte al resto de los componentes hijos.


export const useCarrito = () => {
    return useContext(contexto)
}


const MiProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([])
    const [total, setTotal] = useState(0)
    const [cantidadTotal, setCantidadTotal] = useState(0)

    const vaciarCarrito = () => {
        setCarrito([])
        setTotal(0)
    }

    

    const agregarProducto = (producto, cantidad) => {
        /* console.log(producto)
        console.log(cantidad) */
        if (isInCart.inCart) {
            //Sumo la cantidad
        } else {
            console.log("producto nuevo en el carrito!")
            setCarrito([
                ...carrito,
                { ...producto, cantidad }
            ])
            
            setTotal(total + producto.price * cantidad)
            
            setCantidadTotal(cantidadTotal + cantidad)
            
        }
    
    }

    const isInCart = (id) => {
        //return true o false
        return { inCart: false, item: {}, index: 0 }
    }


    const valorDelContexto = {
        productos: carrito,
        cantidad: total,//precio
        cantidadTotal : cantidadTotal,//cant de productos
        vaciarCarrito: vaciarCarrito,
        agregarProducto: agregarProducto
    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}


export default MiProvider