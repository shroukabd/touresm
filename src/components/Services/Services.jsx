import React from 'react'
import './services.css'
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaCheckDouble } from 'react-icons/fa';
import { FaTruck } from "react-icons/fa";

const Services = () => {
  return (
    <div className='services container'>
        <div className="service">
        <FaCheckDouble className='service-icon'/>
        <span>Quality Product</span>
        </div>
        
        <div className="service">
         <FaTruck className='service-icon'/>
        <span>Free Shoping</span>
        </div>

        <div className="service">
        <FaAngleDoubleRight className='service-icon'/>
        <span>14-Day Return</span>
        </div>

        <div className="service">
        <FaCheckDouble className='service-icon'/>
        <span>24/7 Support</span>
        </div>
    </div>
  )
}

export default Services
