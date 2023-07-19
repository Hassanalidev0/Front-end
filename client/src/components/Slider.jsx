import React from "react";

const Slider = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 colSlider">
            <div
              id="carouselExampleInterval"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="10000">
                  <div className="row rSlider">
                    <div className="col-4">
                      <p className="sliderTxt">Online Support 24/7</p>
                    </div>
                    <div className="col-4">
                      <p className="sliderTxt">Free Shipping and return</p>
                    </div>
                    <div className="col-4">
                      <p className="sliderTxt">Money Back Gurantee</p>
                    </div>
                  </div>
                </div>
                <div class="carousel-item" data-bs-interval="10000">
                  <div className="row rSlider">
                    <div className="col-4">
                      <p className="sliderTxt">Money Back Gurrante</p>
                    </div>
                    <div className="col-4">
                      <p className="sliderTxt">Free Shipping and return</p>
                    </div>
                    <div className="col-4">
                      <p className="sliderTxt">Online Support 24/7</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
