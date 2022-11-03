import React from 'react';
import {Routes , Route} from 'react-router-dom';
import Home from './Home';
import Carrito from './Carrito';
import ItemListContainer from './ItemListContainer' 
import Categorias from './Categorias'

const Main = () => {

   

    return (
        <main>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/productos' element={<ItemListContainer/>}/>
                <Route path='/categorias' element={<Categorias/>}/>
                <Route path='/carrito' element={<Carrito/>}/>
            </Routes>
        </main>
    )
}

export default Main