import React from 'react'
import './header.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Header = () => {
    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div className='header container'>
        <Slider {...settings}className="header-left">
            <div className="header-left-man h">
                <h1>Man Fashion</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur,
                     quis. Dolores alias unde facilis. Iusto voluptates impedit cupiditate
                      in labore laudantium excepturi,
                     fugit nulla repellendus vitae, delectus maxime quod animi.</p>
                     <button>Shop Now</button>
            </div>
            <div className="header-left-Woman h">
                <h1>Woman Fashion</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur,
                     quis. Dolores alias unde facilis. Iusto voluptates impedit cupiditate
                      in labore laudantium excepturi,
                     fugit nulla repellendus vitae, delectus maxime quod animi.</p>
                     <button>Shop Now</button>
            </div>
            <div className="header-left-Kids h">
                <h1>Kids Fashion</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur,
                     quis. Dolores alias unde facilis. Iusto voluptates impedit cupiditate
                      in labore laudantium excepturi,
                     fugit nulla repellendus vitae, delectus maxime quod animi.</p>
                     <button>Shop Now</button>
            </div>
        </Slider>
        <div className="header-right">
            <div className="header-right-up">
                <h4>Save 20%</h4>
                <h2>Special offer</h2>
                <button>Shop Now</button>
            </div>
            <div className="header-right-down">
            <h4>Save 20%</h4>
                <h2>Special offer</h2>
                <button>Shop Now</button>
            </div>

        </div>
      
    </div>
  )
}

export default Header
