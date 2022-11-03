const Item = ({title, image, price}) => {
  return (
    <article className='product__card card'>
    
        <h1 className='card__title'>{title}</h1>
        <h2 className="card__price">${price}</h2>
        <img src={image} alt={title} className='card__img'/>
        <button className="card__button">ver mas</button>
        
    </article>
  )
}

export default Item