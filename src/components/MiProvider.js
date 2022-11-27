import { createContext, useState, useContext } from 'react';

export const contexto = createContext() 

const {Provider} = contexto;  


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
       
        if (isInCart.inCart) {
            
        } else {
            console.log('Producto nuevo en el carrito!')
            setCarrito([...carrito,{ ...producto, cantidad }])
            
            setTotal(total + producto.precio * cantidad)
            
            setCantidadTotal(cantidadTotal + cantidad)
            
        }
    
    }

    const isInCart = (id) => {
        
        return { inCart: false, item: {}, index: 0 }
    }


    const valorDelContexto = {
        productos: carrito,
        cantidad: total,
        cantidadTotal : cantidadTotal,
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