import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import slideBanner1 from '../assets/slide-banner-3-patos.png';
import slideBanner2 from '../assets/slide-banner-2-treinos.png'
import slideBanner3 from '../assets/slide-banner-1-receitas.png'

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    centerMode: true,
    useCSS: true
  };
  return (
    <Slider {...settings} style={{padding: "2em"}}>
      <div>
        <img style={{height: 400, width: 1400}} className="imagemHeader" src={slideBanner1} alt="Divulgacao Woot com imagem de patos atleticos no modelo de pixel art"/>
      </div>
      <div>
        <img style={{height: 400, width: 1400}} className="imagemHeader" src={slideBanner2} alt="Divulgacao Woot com imagem de itens de academia em modelo pixel art"/>
      </div>
      <div>
        <img style={{height: 400, width: 1400}} src={slideBanner3} alt="Divulgacao Woot com imagem de alimentos em modelo pixel art"/>
      </div>
    </Slider>
  );
}