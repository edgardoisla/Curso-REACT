import React, { createContext } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { BrowserRouter } from 'react-router-dom';

export const contexto = createContext()  // Se crea el contexto o "caja vacía" que va a compartir su contenido al resto de los componentes

const { Provider } = contexto;  // El provider es quien le da valor al contexto y a la vez lo comparte al resto de los componentes hijos.

function App() {

    const valorContexto ={
        productos:[
            {id: 1, nombre: "Manguera", precio: 150, cantidad: 5},
            {id: 3, nombre: "Codo L", precio: 250, cantidad: 9}
        ],
        cantidad : 14,
    }

    return (
        <Provider value={valorContexto}>
            <BrowserRouter>
                <Header />
                <Main />
                <Footer />
            </BrowserRouter>
        </Provider>
    )
}

export default App