import React from 'react'
import './footer.css';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import img1 from '../../assets/img/payments.png'
const Footer = () => {
  return (
    <div className='footer'>
         <div className="footer-up">
         <div className="footer-right">
          <h1>GET IN TOUCH</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
             Dolore corrupti dolores beatae minus sapiente, illo iusto error est illum dolorem officiis
             neque totam pariatur porro? Nisi reiciendis dolores rerum minima.</p>
         </div>
         <div className="footer-meddile">
          <h1>QUICK SHOP</h1>
          <ul>
          <li>Home</li>
          <li>About</li>
          <li>Shop</li>
          <li>Contact</li>
          <li>Cart</li>
          </ul> 
         </div>
         <div className="footer-social">
          <h1>Social Media</h1>
          <ul>
            <li><FaFacebook/></li>
            <li><FaTwitter/></li>
            <li><FaInstagram/></li>
            <li><FaLinkedinIn/></li>
            <li><FaGithub/></li>
          
          </ul>
         </div>
         <div className="footer-left">
          <h1>NEW SLETTER</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
             <input type="text"  placeholder='Type your Email'/>
             <button>Subscripe</button>

         </div>
         </div>
         <div className="footer-down">
              <h4>@Copy Write By Shoo Mohamed, All Right Reserved</h4>
              <img src={img1} alt="" />
         </div>
    </div>
  
   
  )
}

export default Footer
