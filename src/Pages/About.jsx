import React from 'react'
import './about.css';
import img1 from '../assets/img/about.jpg';
const About = () => {
  return (
    <div className='about container'>
         <h2 className='a'>About <span>US</span></h2>
         <div className="about-contact">
        <div className="about-left">
         
          <img src={img1} alt="" />
        </div>
        <div className="about-right">
          <h2>Welcom To <span>Shoo Shop</span></h2>
          <h3><span>Shoo Shop</span> Lorem ipsum dolor sit amet consectetur 
          adipisicing elit. Velit, nesciunt exercitationem. Doloribus, ut harum dolor quaerat deserunt sapiente 
          numquam officiis fugit quisquam! Aspernatur assumenda cupiditate</h3>
          <button>Shop Now</button>
        </div>
        </div>
     
    </div>
  )
}

export default About
