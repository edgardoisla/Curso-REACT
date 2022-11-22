import {randProduct} from '@ngneat/falso'
import ItemCount from './ItemCount'
import { useContext } from 'react'
import { contexto} from './MiProvider'

const ItemDetail = () => {
    const producto = randProduct()

    const valorContexto = useContext(contexto)
    //console.log(valorContexto)


    // 1) el padre contiene el callback:

    const handleAdd = (cantidad) =>{

      console.log("Se agregaron " + cantidad + " productos");

      console.log(producto);
      

    }

    const agregarAlCarrito = () =>{

      valorContexto.vaciarCarrito()
      
    }

  return (
    <article className='product__card card'>
        <h1>Producto {producto.title} - ${producto.price}</h1>
        <div className='detail-flex counter-actions'>
            <img src={producto.image} alt ={producto.title}/>
            <div>
                <p>{producto.description}</p>
                <ItemCount handleAdd = {handleAdd} /* 2) paso el callback al hijo como prop*/ /> 
                <button onClick={agregarAlCarrito}>Agregar al carrito</button>
                
            </div> 
        </div>
    </article>
  )
}

export default ItemDetail