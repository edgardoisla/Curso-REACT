import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { BrowserRouter } from 'react-router-dom';
import MiProvider from './MiProvider';



function App() {

    

    return (
        <MiProvider>
            <BrowserRouter>
                <Header />
                <Main />
                <Footer />
            </BrowserRouter>
        </MiProvider>
        
    )
}

export default App