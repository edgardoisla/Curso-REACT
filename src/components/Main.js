import React from 'react';
import {Routes , Route} from 'react-router-dom';
import Home from './Home';
import Carrito from './Carrito';
import ItemListContainer from './ItemListContainer' 
import Categorias from './Categorias'
import ItemDetailContainer from './ItemDetailContainer'

const Main = () => {

   

    return (
        <main>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/productos' element={<ItemListContainer/>}/>
                <Route path='/:cat' element={<Categorias/>}/>
                <Route path='/item/:id' element={<ItemDetailContainer/>}/>
                <Route path='/carrito' element={<Carrito/>}/>
            </Routes>
        </main>
    )
}

export default Main