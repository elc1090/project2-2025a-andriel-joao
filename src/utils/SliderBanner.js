import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import pessoasTreinando from '../assets/pessoas-treinando.png';

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true
  };
  return (
    <Slider {...settings}>
      <div>
        <img style={{height: 400, width: 1400}} className="imagemHeader" src={pessoasTreinando}/>
      </div>
      <div>
        <img style={{height: 400, width: 1400}} className="imagemHeader" src="https://www.gsuplementos.com.br/upload/banner/629d18b9f32e78d53c8a3418f7e197ba.webp"/>
      </div>
      <div>
        <img style={{height: 400, width: 1400}} src="https://www.gsuplementos.com.br/upload/banner/5d8e0c4d9d5ae8dd46edcf203b0458fc.webp"/>
      </div>
    </Slider>
  );
}