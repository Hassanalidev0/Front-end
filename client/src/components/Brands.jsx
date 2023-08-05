import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Brands = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 5,
          
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        
        },
      },
    ]
      };
  return (
    
    
        <Slider {...settings}>
        <div style={{backgroundColor:'white',maWwidth:140,maxheight:60}}>
            <img src='/brands/avg.png' style={{width:'auto',height:'auto'}} />
          </div>
          <div style={{backgroundColor:'white',maxWidth:140,maxHeight:60}}>
            <img src='/brands/ctm.png'  style={{width:'auto',height:'auto'}} />
          </div>
          <div style={{backgroundColor:'white',maxWidth:140,maxHeight:60}}>
            <img src='/brands/ds.png' style={{width:'auto',height:'auto'}}/>
          </div>
          <div style={{backgroundColor:'white',maxWidth:140,maxHeight:60}}>
            <img src='/brands/gg.png' style={{width:'auto',height:'auto'}}/>
          </div>
          <div style={{backgroundColor:'white',maxWidth:140,maxHeight:60}}>
            <img src='/brands/rj.png' style={{width:'auto',height:'auto'}}/>
          </div>
          {/* 2nd one */}
        <div style={{backgroundColor:'white',maWwidth:140,maxheight:60}}>
            <img src='/brands/avg.png' style={{width:'auto',height:'auto'}} />
          </div>
          <div style={{backgroundColor:'white',maxWidth:140,maxHeight:60}}>
            <img src='/brands/ctm.png'  style={{width:'auto',height:'auto'}} />
          </div>
          <div style={{backgroundColor:'white',maxWidth:140,maxHeight:60}}>
            <img src='/brands/ds.png' style={{width:'auto',height:'auto'}}/>
          </div>
          <div style={{backgroundColor:'white',maxWidth:140,maxHeight:60}}>
            <img src='/brands/gg.png' style={{width:'auto',height:'auto'}}/>
          </div>
          <div style={{backgroundColor:'white',maxWidth:140,height:60}}>
            <img src='/brands/rj.png' style={{width:'auto',height:'auto'}}/>
          </div>
        </Slider>
      
   
  )
}

export default Brands