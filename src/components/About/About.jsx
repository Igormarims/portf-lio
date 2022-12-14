import React from 'react'
import './About.styles.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
       <h5>Get To Know</h5>
       <h2>About Me</h2>
       <div className="container about__container">
          <div className="about__me">
             <div className="about__me-image">
                <img src={ ME } alt="" />
             </div>
          </div>
          <div className="about__content">
             <div className="about__cards">
              
              <article className='about__card'>
                <FaAward className='about__icon'/>
                <h5>Exprerience</h5>
                <small>3+ Year working</small>
              </article>
              
              <article className='about__card'>
                <FiUsers className='about__icon'/>
                <h5>Client</h5>
                <small>200+ Worldwide</small>
              </article>
             
              <article className='about__card'>
                <VscFolderLibrary className='about__icon'/>
                <h5></h5>
                <small>3+ Year working</small>
              </article>
             </div>
             <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus laboriosam sapiente 
                amet provident officiis? Odit, exercitationem maiores quia sapiente qui perspiciatis, 
                quibusdam sunt reiciendis tenetur earum veritatis ipsum aliquam eligendi.0
              </p>
               <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
       </div>
    </section>
  )
}

export default About