import React from 'react'
import './Services.styles.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
           <h3>UI/UX Design</h3> 
          </div>
          <ul className="service__list">
            <li >
              <BiCheck className="service__list-icon"/>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              </p>
            </li>
            <li className="">
              <BiCheck className="service__list-icon"/>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              </p>
            </li>
            <li className="">
              <BiCheck className="service__list-icon"/>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              </p>
            </li>
            <li className="">
              <BiCheck className="service__list-icon"/>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              </p>
            </li>
            <li className="">
              <BiCheck className="service__list-icon"/>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              </p>
            </li>
            
          </ul>
        </article>
        {/* WEB DEVELOPER */}

        <article className="service">
          <div className="service__head">
           <h3>Web Development</h3> 
          </div>
          <ul className="service__list">
            <li className="">
              <BiCheck className="service__list-icon"/>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              </p>
            </li>
            <li className="">
              <BiCheck className="service__list-icon"/>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              </p>
            </li>
            <li className="">
              <BiCheck className="service__list-icon"/>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              </p>
            </li>
            <li className="">
              <BiCheck className="service__list-icon"/>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              </p>
            </li>
            <li className="">
              <BiCheck className="service__list-icon"/>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              </p>
            </li>
            <li className="">
              <BiCheck className="service__list-icon"/>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              </p>
            </li>
          </ul>
        </article> 
        {/* CONTENT CREATION  */}
        <article className="service">
          <div className="service__head">
           <h3>Content Creation</h3> 
          </div>
          <ul className="service__list">
            <li className="">
              <BiCheck className="service__list-icon"/>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              </p>
            </li>
            <li className="">
              <BiCheck className="service__list-icon"/>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              </p>
            </li>
            <li className="">
              <BiCheck className="service__list-icon"/>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              </p>
            </li>
            <li className="">
              <BiCheck className="service__list-icon"/>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              </p>
            </li>
            <li className="">
              <BiCheck className="service__list-icon"/>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              </p>
            </li>
          </ul>
        </article>
      </div>
  </section>
  )
}

export default Services