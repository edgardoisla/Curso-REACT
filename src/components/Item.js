import {Link} from 'react-router-dom'

const Item = ({title, image, price, id}) => {
  return (
    <article className='product__card card'>
    
        <h1 className='card__title'>{title}</h1>
        <h2 className="card__price">${price}</h2>
        <img src={image} alt={title} className='card__img'/>
        <button className="card__button">
          <Link to= {'/item/' +id}>Detalle</Link>
        </button>
        
    </article>
  )
}

export default Item