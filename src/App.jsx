import React, { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Shop from './Pages/Shop';
import Product from './Pages/Product';
import Contact from './Pages/Contact';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Fake from './Pages/fake/Fake';
import Dommy from './Pages/dommy/Dommy';
import FakeDetails from './Pages/fake/FakeDetails';
import DommyDetails from './Pages/dommy/DommyDetails';
import Cart from './Pages/Cart/Cart';
import Watchlist from './Pages/Watchlist/Watchlist';
import Swal from 'sweetalert2'


function App(){

  let [cartItems , setCartItems] = useState([]);
  let [watchList , setWatchList] = useState([]);
 

  function addToCart(product){
    let selectedProduct = cartItems.find(item => item.id == product.id)
    if(selectedProduct){
      setCartItems(cartItems.map(item => item.id == product.id ?
        {...selectedProduct , qty : selectedProduct.qty + 1} :item
      ))
     
    }else{
      setCartItems([...cartItems , {...product , qty : 1}])
      Swal.fire({
        title: "This Product add in Cart successfuly!",
        icon: "success",
        showConfirmButton: false,
        timer: 2000
      });
    }

   
    
  }

  function removeFromCart(product){
    setCartItems(cartItems.filter(item => item.id != product.id));
    console.log('remove');
    Swal.fire({
      title: "This Product removed from Cart!",
      text: "You clicked the button!",
      icon: "success",
      showConfirmButton: false,
      timer: 2000
    });
  }

  function addTowatchlist(product){
    setWatchList([...watchList , product])
  

   
    Swal.fire({
      title: "This Product added in WatchList!",
      text: "You clicked the button!",
      icon: "success",
      showConfirmButton: false,
      timer: 2000
    });
  }
    
 
  


  function removeFeomWatchlist(product){
    setWatchList(watchList.filter(item => item.id != product.id))
    Swal.fire({
      title: "This Product Removed From WatchList!",
      text: "You clicked the button!",
      icon: "success",
      showConfirmButton: false,
      timer: 2000
    });
  }


  return (
    <BrowserRouter>
    <Navbar cartItems = {cartItems} watchList = {watchList}/>
    <Routes>
      <Route path='/' element = {<Home addTowatchlist = {addTowatchlist} addToCart = {addToCart}/>}/>
      <Route path='/about' element = {<About/>}/>
      <Route path='/shop' element = {<Shop/>}/>
      <Route path='/product' element = {<Product/>}/>
      <Route path='/contact' element = {<Contact/>}/>
      <Route path='/fake' element = {<Fake addToCart ={addToCart} addTowatchlist = {addTowatchlist}/>}/>
      <Route path='/dommy' element = {<Dommy addToCart = {addToCart} addTowatchlist = {addTowatchlist}/>}/>
      <Route path='/cart' element = {<Cart cartItems = {cartItems} addToCart = {addToCart}removeFromCart={removeFromCart}/>}/>
      <Route path='/watchlist' element = {<Watchlist watchList = {watchList} addToCart = {addToCart} removeFeomWatchlist = {removeFeomWatchlist}/>}/>
      <Route path='/fakeDetails/:id' element = {<FakeDetails  addToCart = {addToCart}/>}/>
      <Route path='/dommyDetails/:id' element = {<DommyDetails addToCart = {addToCart}/>}/>
  



    
      
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
