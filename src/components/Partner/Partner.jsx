import React from 'react';
import './partner.css';
import img1 from '../../assets/img/vendor-1.jpg';
import img2 from '../../assets/img/vendor-2.jpg';
import img3 from '../../assets/img/vendor-3.jpg';
import img4 from '../../assets/img/vendor-4.jpg';
import img5 from '../../assets/img/vendor-5.jpg';
import img6 from '../../assets/img/vendor-6.jpg';
import img7 from '../../assets/img/vendor-7.jpg';
import img8 from '../../assets/img/vendor-8.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Partner = () => {
    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1
      };
  return (
    <div className='partners container'>
        <Slider {...settings} className="partner">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
             <img src={img3} alt="" />
             <img src={img4} alt="" />
            <img src={img5} alt="" />
            <img src={img6} alt="" />
            <img src={img7} alt="" />
            <img src={img8} alt="" />

        </Slider>
      
    </div>
  )
}

export default Partner
