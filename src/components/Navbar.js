import React from 'react';
import CartWidget from './CartWidget';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav">
      <NavLink className="nav__link link" to="/productos">productos </NavLink>
      <NavLink className="nav__link link" to="/categorias">categorias </NavLink>
      <NavLink className="nav__link link" to="/carrito"><CartWidget/></NavLink>
    </nav>
  )
}

export default Navbar