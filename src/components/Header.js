import React from "react"
import Navbar from "./Navbar"
import ItemListContainer from "./ItemListContainer";

function Header(greeting) {
    
    return (
        <header id="main-header" className="header">
            <h1>REACT</h1>
            <ItemListContainer
                nombre ="Edgardo"
                apellido="Isla"  
            
            />
            <Navbar/>
        </header>
    )
}

export default Header