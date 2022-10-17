import React from 'react'
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


const CartWidget = () => {
    
    return (
    <IconButton color="primary" aria-label="add to shopping cart">
        <AddShoppingCartIcon />
    </IconButton>
    )
}

export default CartWidget