import React, { useEffect , useState} from 'react'
import './dommy.css';
import { FaHeart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Dommy = ({addToCart , addTowatchlist}) => {


     let [products , setProducts] = useState([]);
    useEffect(function(){
       fetch("https://dummyjson.com/products")
       .then(res => res.json())
       .then(data =>{
        setProducts(data.products);
       })
    } , [])
  return (
    <div className='dommy container'>
           <div className="tittle">
      <h2>Dummy Products</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Enim dignissimos consectetur fugit error doloremque accusamus
          minus omnis repellendus quaerat iusto, qui 
        unde labore numquam quos placeat tempora
         veritatis repudiandae facere?</p>
         <div className="products">
            {products.map(function(product){
                return(
                    <div className='product'>
                     <Link to={`/dommyDetails/${product.id}`}>
                    
                     <img src={product.thumbnail} alt="" />

                     </Link>
                        <h3>{product.title.slice(0 , 20)}</h3>
                        <div>
                        <FaHeart className='dommy-icon' onClick={() => addTowatchlist(product)}/>
                        <FaCartPlus className='dommy-icon' onClick={() => addToCart(product)}/>
                       </div>
                    </div>
                )
            })}
         </div>
      </div>
    </div>
  )
}

export default Dommy
