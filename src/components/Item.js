import {Link} from 'react-router-dom'
//import {db} from './firebase'

const Item = ({nombre, imagen, precio, id}) => {


  return (
    <article className='product__card card'>
    
        <h1 className='card__title'>{nombre}</h1>
        <h2 className="card__price">${precio}</h2>
        <img src={imagen} alt={nombre} className='card__img'/>
        <button className="card__button">
          <Link to= {'/item/' +id}>Detalle</Link>
        </button>
        
    </article>
  )
}

export default Item