import React, { useState } from 'react'
import './navbar.css'
import { FaChevronDown } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Navbar = (cartItems , watchList) => {

    let [openMenu , setOpenMenu] = useState(false);

    function isOpenMenu(){
      setOpenMenu(!openMenu)
    }
    function closeMenu(){
     setOpenMenu(false);
    }
  return (
    <nav>
       <div className="nav-left">
        <h2>SHoO <span>Shop</span></h2>
        </div> 
       <div className="nav-meddile">
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/shop'>Shop</Link></li>
            <li className='products-link'><Link to='/product' onClick={isOpenMenu}>
              Products <FaChevronDown/></Link>
                {openMenu &&        <div className="products-toogle">
              <Link to='/fake' onClick={closeMenu}>Fack Abi products</Link>
              <Link to='/dommy' onClick={closeMenu}>Dummy Abi products</Link>

                </div>} 
               
              </li> 
            <li><Link to='/contact'>Contact</Link></li>
            </ul>
          
            </div> 
       
       <div className="nav-right">
        <div className="watchlist">
          <Link to='/watchList'> 
           <FaHeart  className='nav-icon'/></Link>
         
          <span>({watchList.length})</span>
        </div>
        <div className="shopping">
           <Link to='/cart'>
           <FaShoppingCart className='nav-icon'/>
           </Link>
            <span>({cartItems.length})</span>
        </div>
        </div> 
    </nav>
  )
}

export default Navbar
