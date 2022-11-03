import React from 'react'


const Footer = () => {
  return (
    <footer className='footer'>
        <div className="redes footer__column">
            <a className='footer__link link' href="https://www.facebook.com/">facebook</a>
            <a className='footer__link link' href="https://www.instagram.com/">insatgram</a>
            <a className='footer__link link' href="https://www.twitter.com/">twitter</a>
        </div>
        <div className="redes footer__column">
            <p>(c) 2022 - Todos los derechos reservados  </p>
        </div>
        
    </footer>
  )
}

export default Footer