import React from 'react'
import './contact.css'
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className='contact container'>
      <div className="contact-left">
        <form>
          <input type="text" placeholder='Name' />
          <input type="text" placeholder='Email' />
         <input type="text" placeholder='Subject' />
         <input type="text" placeholder='Name' />
       <textarea placeholder='Meseage'></textarea>
       <button>Semd Meseage</button>

           
        </form>
      </div>
      <div className="contact-right">
        <div className="contact-right-up">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d55112.657590250084!2d31.7325312!3d30.307123200000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1715344005415!5m2!1sar!2seg"
     ></iframe>
           </div>
        <div className="contact-right-down">
          <div>
          <FaLocationDot className='contact-icon'/>
          <span>Egypt - Sharkia - Zagazige</span>
            
          </div>
          <div>
          <MdEmail className='contact-icon'/>
          <span>Shoocoading123@gmail.com</span>
            
          </div>
          <div>
          <FaPhoneAlt className='contact-icon'/>
          <span>123456789</span>
            
          </div>
        </div>

      </div>

    </div>
  )
}

export default Contact
