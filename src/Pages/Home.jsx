import React from 'react'
import Header from '../components/Header/Header'
import Services from '../components/Services/Services';
import Category from '../components/Categoris/Category';
import FeatureProducts from '../components/featureProducts/FeatureProducts';
import Partner from '../components/Partner/Partner';
const Home = ({addTowatchlist ,  addToCart}) => {
  return (
    <div>
       
       <Header/>
      <Services/>
      <Category/>
      <FeatureProducts addTowatchlist = {addTowatchlist}  addToCart = {addToCart}/>
      <Partner/>
    </div>
  )
}

export default Home
