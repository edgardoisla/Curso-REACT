import ItemCount from './ItemCount'
import {useState} from 'react'
import {useCarrito} from './MiProvider'

const ItemDetail = ({producto}) => {
    
    
    const { agregarProducto } = useCarrito()

    const [cantidad, setCantidad] = useState(1)

    const [confirmado, setConfirmado] = useState(false)


    // 1) el padre contiene el callback:

    const handleAdd = (cantidad) =>{

      console.log("Se agregaron " + cantidad + " productos")

      console.log(producto);
      
      setCantidad(cantidad);
      
      setConfirmado(true)

    }

    const agregarAlCarrito = () =>{

      agregarProducto(producto,cantidad)
      
    }

  return (
    <article className='product__card card'>
        <h1>Producto {producto.nombre} - ${producto.precio}</h1>
        <div className='detail-flex counter-actions'>
            <img src={producto.imagen} alt ={producto.nombre}/>
            <div>
                <p>Stock disponible: {producto.stock}</p>
                <ItemCount init= {cantidad} handleAdd = {handleAdd} /* 2) paso el callback al hijo como prop*/ /> 
                {confirmado &&<button onClick={agregarAlCarrito}>Agregar al carrito</button>}
                
            </div> 
        </div>
    </article>
  )
}

export default ItemDetail