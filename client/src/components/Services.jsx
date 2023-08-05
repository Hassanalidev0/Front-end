import React from "react";

const Services = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="d-flex flex-lg-row flex-md-row flex-column justify-content-evenly align-items-center   p-2">
        <div className="d-flex flex-column  " style={{maxWidth:373}}>
          <div className="d-flex flex-column align-items-center  ">
            <div
              style={{
                width: 80,
                height: 80,
                backgroundColor: "black",
                borderRadius: "50%",
              }}
              className=" p-5 d-flex justify-content-center align-items-center"
            >
              <i
                className="bi bi-headset"
                style={{ fontSize: 70, color: "white" }}
              />
            </div>
            <h3 style={{fontSize:16}}>CUSTOMER SUPPORT</h3>
            <p style={{fontSize:14}}>Need Assistence</p>
          </div>
          <div><p>We really care about you and your website as much as you do. Purchasing Porto or any other theme from us you get 100% free support.</p></div>
        </div>
        <div className="d-flex flex-column  " style={{maxWidth:373}}>
          <div className="d-flex flex-column align-items-center  ">
            <div
              style={{
                width: 80,
                height: 80,
                backgroundColor: "black",
                borderRadius: "50%",
              }}
              className=" p-5 d-flex justify-content-center align-items-center"
            >
              <i
                className="bi bi-credit-card"
                style={{ fontSize: 70, color: "white" }}
              />
            </div>
            <h3 style={{fontSize:16}}>SECURE PAYMENTS</h3>
            <p style={{fontSize:14}}>Safe & Fast?</p>
          </div>
          <div><p>We really care about you and your website as much as you do. Purchasing Porto or any other theme from us you get 100% free support.</p></div>
        </div>
        <div className="d-flex flex-column  " style={{maxWidth:373}}>
          <div className="d-flex flex-column align-items-center  ">
            <div
              style={{
                width: 80,
                height: 80,
                backgroundColor: "black",
                borderRadius: "50%",
              }}
              className=" p-5 d-flex justify-content-center align-items-center"
            >
              <i
                className="bi bi-arrow-90deg-left"
                style={{ fontSize: 60, color: "white" }}
              />
            </div>
            <h3 style={{fontSize:16}}>REFUND</h3>
            <p style={{fontSize:14}}>Easy & Free?</p>
          </div>
          <div><p>We really care about you and your website as much as you do. Purchasing Porto or any other theme from us you get 100% free support.</p></div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
