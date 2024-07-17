import React from 'react'
import './watchlist.css';
import { FaCartPlus } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

const Watchlist = ({watchList , addToCart , removeFeomWatchlist}) => {
  return (

     <>
     {watchList.length == 0 ?
     <h2 className='no-product container'>No Any Product From Watchlist</h2>
     :
     <div className='watchlist container'>
     {watchList.map(item => {
         return(
       
           <div className='watchlist-products'>
           <img src={item.image ? item.image : item.thumbnail} alt="" />
           <h2>{item.name}</h2>
           <h3>Price : ${item.price}</h3>
           <div>
             <button  className='btn-a' onClick={() => addToCart(item)}><FaCartPlus/></button>
             <button  className='btn-b' onClick={() => removeFeomWatchlist(item)}><FaTimes/></button>
           </div>
           </div>
           
       
         )
     })}
 </div>
     
     }
     </>
  )
}

export default Watchlist
