import React, { useContext } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { contexto } from './App';
import  {Link} from 'react-router-dom'

const CartWidget = () => {
    
  const resultado = useContext(contexto)
  
    
    return (
        <Link to='/carrito'>
            
            <ShoppingCartIcon className='cart__cartWidget'/>
            <span>{resultado.cantidad}</span> 
                        
        </Link>
    )
}

export default CartWidget