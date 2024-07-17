import React, { useEffect, useState } from 'react'
import './fake.css';
import { FaHeart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Fake = ({addToCart , addTowatchlist}) => {
 let [products , setProducts] = useState([]);

    useEffect(function(){
        fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data =>{
            setProducts(data);
        })
    } , [])
  return (
    <div className='fake container'>
      <div className="tittle">
      <h2>Fake Products</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Enim dignissimos consectetur fugit error doloremque accusamus
          minus omnis repellendus quaerat iusto, qui 
        unde labore numquam quos placeat tempora
         veritatis repudiandae facere?</p>
      </div>
        <div className="products">
            {products.map(function(product){
                   return(
                    <div className='product'>
                         <Link to={`/fakeDetails/${product.id}`} className='link'>
                         <img src={product.image} alt="" />

                         </Link>
                       <h3>{product.title.slice(0 , 20)}</h3>
                       <div>
                        <FaHeart className='product-icon' onClick={() => addTowatchlist(product)}/>
                        <FaCartPlus className='product-icon' onClick={() => addToCart(product)}/>
                       </div>
                    </div>
                   )
            })}
        </div>
    </div>
  )
}

export default Fake
