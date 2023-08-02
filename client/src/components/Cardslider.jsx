import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Cardslider = ({ products }) => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    
      <Slider {...settings} className="cardSlider">
        {products.map(product => (
          <div key={product.id}>
            <div className="cardslider-pic">
              <img
                src={product.img}
                alt={product.name}
              />
              <div className="cardslider-info">
                <h3>{product.name}</h3>
                <p>Price: {product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    
  );
};

export default Cardslider;
