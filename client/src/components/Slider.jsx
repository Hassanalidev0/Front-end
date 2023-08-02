import React from "react";
import Sliders from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container">
      <div className="row">
        <Sliders {...settings}>
          <div className="d-flex justify-content-center ">
            <div style={{ width: 41, height: 49 }} className="  ">
              <i class="bi bi-clock-history" style={{ fontSize: 35 }}></i>
            </div>
            <div className="d-flex flex-column   justify-content-end">
              <span style={{ fontSize: 14, fontWeight: "bolder" }}>
                Online Support 24/7
              </span>
              <span style={{ fontSize: 13 }}>Services Available AllTime</span>
            </div>
          </div>

          <div className="d-flex justify-content-center ">
            <div style={{ width: 41, height: 49 }} className="  ">
              <i class="bi bi-truck" style={{ fontSize: 35 }}></i>
            </div>
            <div className="d-flex flex-column   justify-content-end">
              <span style={{ fontSize: 14, fontWeight: "bolder" }}>
                Free Shipping and return
              </span>
              <span style={{ fontSize: 13 }}>Services Available AllTime</span>
            </div>
          </div>

          <div className="d-flex justify-content-center ">
            <div style={{ width: 41, height: 49 }} className="  ">
              <i class="bi bi-coin" style={{ fontSize: 35 }}></i>
            </div>
            <div className="d-flex flex-column   justify-content-end">
              <span style={{ fontSize: 14, fontWeight: "bolder" }}>
                Money Back Gurantee
              </span>
              <span style={{ fontSize: 13 }}>Services Available AllTime</span>
            </div>
          </div>

          <div className="d-flex justify-content-center ">
            <div style={{ width: 41, height: 49 }} className="  ">
              <i class="bi bi-coin" style={{ fontSize: 35 }}></i>
            </div>
            <div className="d-flex flex-column   justify-content-end">
              <span style={{ fontSize: 14, fontWeight: "bolder" }}>
                Money Back Gurantee
              </span>
              <span style={{ fontSize: 13 }}>Services Available AllTime</span>
            </div>
          </div>

          <div className="d-flex justify-content-center ">
            <div style={{ width: 41, height: 49 }} className="  ">
              <i class="bi bi-truck" style={{ fontSize: 35 }}></i>
            </div>
            <div className="d-flex flex-column   justify-content-end">
              <span style={{ fontSize: 14, fontWeight: "bolder" }}>
                Free Shipping and return
              </span>
              <span style={{ fontSize: 13 }}>Services Available AllTime</span>
            </div>
          </div>

          <div className="d-flex justify-content-center  ">
            <div style={{ width: 41, height: 49 }} className="  ">
              <i class="bi bi-clock-history" style={{ fontSize: 35 }}></i>
            </div>
            <div className="d-flex flex-column   justify-content-end">
              <span style={{ fontSize: 14, fontWeight: "bolder" }}>
                Online Support 24/7
              </span>
              <span style={{ fontSize: 13 }}>Services Available AllTime</span>
            </div>
          </div>
        </Sliders>
      </div>
    </div>
  );
};

export default Slider;
