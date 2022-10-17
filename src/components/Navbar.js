import React from 'react'
import CartWidget from './CartWidget'

const Navbar = () => {
  return (
    <nav>
      <a href="#.">link 1 </a>
      <a href="#.">link 2 </a>
      <a href="#."><CartWidget/></a>
    </nav>
  )
}

export default Navbar