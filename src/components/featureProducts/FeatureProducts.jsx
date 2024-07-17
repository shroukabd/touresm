import React from 'react'
import './featureProducts.css';
import Fdata from './Fdata';
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";

const FeatureProducts = ({addTowatchlist , addToCart}) => {
  return (
    <div className='featureproducts container'>
         <h1 className='tittle'>Feature Products</h1>
         <div className="feature-parent">
            {Fdata.map(item =>{
                return(
                    <div className='fproduct' kay={item.id}>
                      <img src={item.image} alt="" />
                      <h2>{item.name}</h2>
                      <div className="fproduct-price">
                        <h3>${item.price}</h3>
                        <h4>${item.prevePrice}</h4>
                      </div>
                       <div className="fproduct-icons">
                        <FaStar className='star-icon'/>
                        <FaStar className='star-icon'/>
                        <FaStar className='star-icon'/>
                        <FaStar className='star-icon'/>
                        <FaStar className='star-icon'/>

                      </div>
                      <div className="fproduct-control">
                        <FaHeart className='fproduct-btn' onClick={() => addTowatchlist(item)}/>
                        <FaCartPlus className='fproduct-btn' onClick={() => addToCart(item)}/>
                      </div>
                    </div>
                )
            })}
         </div>
    </div>
  )
}

export default FeatureProducts
