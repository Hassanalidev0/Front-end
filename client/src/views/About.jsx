import React from "react";
import Layout from "../components/Layout";

const About = () => {
  return (
    <Layout type="noSidebar">
      <div className="container   d-flex flex-column gap-5 p-3 ">
      <div className="row " style={{backgroundColor:'white'}}>
      <div className="hero-section d-flex flex-column   black">
          <div className="d-flex flex-column">
            <h2 style={{ fontSize: 18, fontFamily: "Poppins" }}>About us</h2>
            <h1 style={{ fontSize: 36, fontFamily: "Poppins" }}>Our Company</h1>
            <button
              className="btn btn-primary "
              style={{ width: 80, height: 40 }}
            >
              Contact
            </button>
          </div>
        </div>

        <div className=" border border-2 d-flex flex-column p-2">
          <h2
            style={{
              fontSize: 19,
              fontFamily: "Poppins",
              fontWeight: "bolder",
            }}
          >
            Our Story
          </h2>
          <p style={{ fontSize: 14, fontFamily: "Poppins" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <p style={{ fontSize: 14, fontFamily: "Poppins" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <h3 style={{ fontSize: 18, fontFamily: "Poppins" }}>
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model search for evolved over sometimes by
            accident, sometimes on purpose{" "}
          </h3>
        </div>
        <div className=" border border-2 p-2">
          <h2>Why Chose us</h2>
          <div className="  d-flex flex-wrap justify-content-between p-1">
            <div className="d-flex flex-column">
              <i
                className="bi bi-heart mx-1"
                style={{ width: 55, height: 55 }}
              ></i>
              <h3
                style={{
                  fontSize: 18,
                  fontFamily: "Poppins",
                  fontWeight: "bold",
                }}
              >
                Free Shipping
              </h3>
              <p style={{ fontSize: 15, fontFamily: "Poppins" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industr.
              </p>
            </div>
            <div className="d-flex flex-column">
              <i
                className="bi bi-heart mx-1"
                style={{ width: 55, height: 55 }}
              ></i>
              <h3
                style={{
                  fontSize: 18,
                  fontFamily: "Poppins",
                  fontWeight: "bold",
                }}
              >
                100% Money Back Gurrantee
              </h3>
              <p style={{ fontSize: 15, fontFamily: "Poppins" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industr.
              </p>
            </div>
            <div className="d-flex flex-column">
              <i
                className="bi bi-heart mx-1"
                style={{ width: 55, height: 55 }}
              ></i>
              <h3
                style={{
                  fontSize: 18,
                  fontFamily: "Poppins",
                  fontWeight: "bold",
                }}
              >
                Online Support 24/7
              </h3>
              <p style={{ fontSize: 15, fontFamily: "Poppins" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industr.
              </p>
            </div>
          </div>
        </div>
        
          {/* client review start from here */}
        <div className="  border border-2 p-2 d-flex flex-column">
          <h2>Happy Client</h2>
          <div className="  d-flex justify-content-between flex-wrap p-2">  
            <div>
              <div className="d-flex">
                <i
                  className="bi bi-heart mx-1"
                  style={{ width: 55, height: 55 }}
                ></i>
                <div className="d-flex flex-column">
                  <strong style={{ fontSize: 16, fontFamily: "Poppins" }}>John Smith</strong>
                  <span style={{ fontSize: 12, fontFamily: "Poppins" }}>SmartWaveCEO</span>
                </div>
              </div>
              <p style={{ fontSize: 14, fontFamily: "Poppins" }}>
                Lorem ipsum dolor sit amet, consectetur elitad adipiscing Cras
                non placerat mipsum dolor sit amet, consectetur elitad
                adipiscing cas non placerat mi.
              </p>
            </div>
            
            <div>
              <div className="d-flex">
                <i
                  className="bi bi-heart mx-1"
                  style={{ width: 55, height: 55 }}
                ></i>
                <div className="d-flex flex-column">
                  <strong style={{ fontSize: 16, fontFamily: "Poppins" }}>John Smith</strong>
                  <span style={{ fontSize: 12, fontFamily: "Poppins" }}>SmartWaveCEO</span>
                </div>
              </div>
              <p style={{ fontSize: 14, fontFamily: "Poppins" }}>
                Lorem ipsum dolor sit amet, consectetur elitad adipiscing Cras
                non placerat mipsum dolor sit amet, consectetur elitad
                adipiscing cas non placerat mi.
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-between flex-wrap p-1">
            <div className="d-flex flex-column">
              <h2 style={{ fontSize: 32, fontFamily: "Poppins" }}>200</h2>
              <span style={{ fontSize: 14, fontFamily: "Poppins" }}>Million Customers</span>
            </div>
            <div className="d-flex flex-column">
              <h2 style={{ fontSize: 32, fontFamily: "Poppins" }}>1800+</h2>
              <span style={{ fontSize: 14, fontFamily: "Poppins" }}>Team Members</span>
            </div>
            <div className="d-flex flex-column">
              <h2 style={{ fontSize: 32, fontFamily: "Poppins" }}>24hr</h2>
              <span style={{ fontSize: 14, fontFamily: "Poppins" }}>Suupport Available</span>
            </div>
            <div className="d-flex flex-column">
              <h2 style={{ fontSize: 32, fontFamily: "Poppins" }}>265+</h2>
              <span style={{ fontSize: 14, fontFamily: "Poppins" }}>Cup of Coffee</span>
            </div>
            <div className="d-flex flex-column">
              <h2 style={{ fontSize: 32, fontFamily: "Poppins" }}>99%</h2>
              <p style={{ fontSize: 14, fontFamily: "Poppins" }}>Positive Reviews</p>
            </div>
          </div>

        </div>
      </div>
       
      

      </div>
    </Layout>
  );
};

export default About;
