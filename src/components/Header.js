import React from "react"
import Navbar from "./Navbar"
import {Link} from "react-router-dom";

function Header() {
    
    return (
        <header id="main-header" className="header">
            <Link to ='/'>
                <h1 className="Link__home">REACT</h1>
            </Link>
            
            <Navbar/>
        </header>
    )
}

export default Header