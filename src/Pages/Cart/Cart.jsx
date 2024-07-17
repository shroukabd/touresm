import React from 'react'
import './cart.css';
const Cart = ({cartItems , removeFromCart , addToCart}) => {
  let total = 0;
  return (
   <>
     {cartItems.length == 0 ?
       <h2 className='no-product container'>No Any Products From Cart</h2>
       :
       <div className='cart container'>
       <div className="cart-products">
        {cartItems.map(function(item){
         total = total + item.price * item.qty
           return (
               <div className="cart-product">
                   <img src={item.image ? item.image : item.thumbnail} alt="" />
                   <h3>${item.price}</h3>
                 <div className="counter">
                 <button onClick={() => addToCart(item)}>+</button>
                 <h2>{item.qty}</h2>
                   <button>-</button>
                 </div>
                 <h4>{item.price * item.qty}</h4>
                   <button onClick={() => removeFromCart(item)}>Remove From Cart</button>
               </div>
           )
        }

        )}
       </div>
       <div className="total">
           <h2>Total:</h2>
           <h2>{total.toString().slice(0 , 6)}$</h2>
       </div>
     
   </div>
    }
   </>
  )
}

export default Cart
