import React from 'react'
import Navbar from "./Navbar"

const Footer = () => {
  return (
    <footer>
        <div className="redes">
            <a href="https://www.facebook.com/">facebook</a>
            <a href="https://www.instagram.com/">insatgram</a>
            <a href="https://www.twitter.com/">twitter</a>
        </div>
        <div>
            <p>(c) 2022 - Todos los derechos reservados  </p>
        </div>
        <div>
            <Navbar/>
        </div>
    </footer>
  )
}

export default Footer