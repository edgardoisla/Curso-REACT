import React from 'react'
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const CartWidget = () => {
    
    return (
    <IconButton color="inherit" aria-label="add to shopping cart">
        <ShoppingCartIcon/>
    </IconButton>
    )
}

export default CartWidget