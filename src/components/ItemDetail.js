import {randProduct} from '@ngneat/falso'
import ItemCount from './ItemCount'

const ItemDetail = () => {
    const producto = randProduct()

    // 1) el padre contiene el callback:

    const handleAdd = (cantidad) =>{

      console.log("Se agregaron " + cantidad + " productos");

      console.log(producto);
      

    }

  return (
    <article className='product__card card'>
        <h1>Producto {producto.title} - ${producto.price}</h1>
        <div className='detail-flex'>
            <img src={producto.image} alt ={producto.title}/>
            <div>
                <p>{producto.description}</p>
                <p>{producto.description}</p>
                <ItemCount
                  handleAdd = {handleAdd}  // 2) paso el callback al hijo como prop
                />
            </div> 
        </div>
    </article>
  )
}

export default ItemDetail