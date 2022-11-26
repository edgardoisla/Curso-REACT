import React from 'react';
import CartWidget from './CartWidget';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav">
      <NavLink className="nav__link link" to="/productos">Productos</NavLink>
      <NavLink className="nav__link link" to="/productos/Refrigeración">Refrigeración</NavLink>
      <NavLink className="nav__link link" to="/productos/Soportes">Soportes</NavLink>
      <NavLink className="nav__link link" to="/carrito"><CartWidget/></NavLink>
    </nav>
  )
}

export default Navbar