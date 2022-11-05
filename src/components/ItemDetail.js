import {randProduct} from '@ngneat/falso'
import ItemCount from './ItemCount'

const ItemDetail = () => {
    const producto = randProduct()

  return (
    <article className='product__card card'>
        <h1>Producto {producto.title} - ${producto.price}</h1>
        <div className='detail-flex'>
            <img src={producto.image} alt ={producto.title}/>
            <div>
                <p>{producto.description}</p>
                <p>{producto.description}</p>
                <ItemCount/>
            </div> 
        </div>
    </article>
  )
}

export default ItemDetail