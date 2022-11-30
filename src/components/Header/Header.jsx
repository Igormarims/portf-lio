import React from 'react'
import './Header.styles.css'
import CTA from './CTA'
import Me from '../../assets/img1.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
   <header>
     <div className="container header__container">
        <h5>Hello</h5>
        <h1>Igor Marques</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img className='me__photo' src={ Me } alt="" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
   </header> 
  )
}

export default Header