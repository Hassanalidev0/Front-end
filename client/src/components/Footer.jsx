import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Login from "../views/auth/Login";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleLoginClose = () => {
    setShowLogin(false);
  };

  return (

      <footer className=" text-start">
        <Container>
          <div className="d-lg-flex">
            <Row>
              <Col md="6" lg="12" xl="12">
                <div className=" my-1 d-flex flex-column justify-content-md-start gap-4" style={{maxWidth:300,maxHeight:302}}>
                  <h3 className="text-uppercase fw-bold " style={{fontSize:15}}>Contact info</h3>
                  <div className="d-flex flex-column gap-3">
                    <span className="text-nowrap d-flex flex-column">
                      <strong style={{fontSize:13}}>Address:</strong>
                      <span style={{fontSize:13}}>1234 Street Name, City, England</span>
                    </span>

                    <span className="text-nowrap d-flex flex-column">
                      <strong style={{fontSize:13}}>EMAIL</strong>
                      <span style={{fontSize:13}}>mail@example.com</span>
                    </span>

                    <span className="text-nowrap d-flex flex-column">
                      <strong style={{fontSize:13}}>PHONE:</strong>
                      <span style={{fontSize:13}}>123-456-7890</span>
                    </span>
                  </div>

                  <div className="d-flex">
                    <a href="http://Facebook.com" rel="noreferrer" target="_blank" className="me-4 link-secondary">
                      <i className="bi bi-facebook" style={{fontSize:15}}></i>
                    </a>
                    <a href="https://twitter.com" rel="noreferrer" target="_blank" className="me-4 link-secondary">
                      <i className="bi bi-twitter" style={{fontSize:15}}></i>
                    </a>
                    <a href="https://instagram.com" rel="noreferrer" target="_blank" className="me-4 link-secondary">
                      <i className="bi bi-instagram" style={{fontSize:15}}></i>
                    </a>
                  </div>
                </div>
              </Col>
            </Row>

            <Row className=" justify-content-lg-end justify-content-md-start">
              <Row className="justify-content-lg-end">
                <Col lg="6" md='6' xl='6' >
                  <div >
                  <h4 style={{fontSize:15}}>SUBSCRIBE TO NEWSLETTER</h4>
                  <p style={{fontSize:13}}>
                    Get all the latest information on Events, Sales and Offers.
                    Sign up for newsletter today.
                  </p>
                  </div>
                </Col>
                <Col
                  lg="6"
                  xl="6"
                  md='6'
                 
                >
                 <div>
                 <Form>
                    <Form.Group className="p-1 d-flex ">
                      <Form.Control type="email" className="border border-2 rounded-start-5" style={{maxWidth:323,height:44}} />
                      <Button type="submit" className="border border-2 rounded-end-5" style={{width:106,height:44}}>SUBSCRIBE</Button>
                    </Form.Group>
                  </Form>
                 </div>
                </Col>
              </Row>

              <Row >
                <Col md="6" lg="6" xl="6" className="border-top border-2">
                  <div>
                  <h4 className="text-uppercase fw-bold" style={{fontSize:15}}>Customer Services</h4>
                  <div className="d-lg-flex d-md-flex justify-content-lg-between gap-2">
                    <div className="d-flex flex-column">
                      <p>
                        <NavLink
                          style={{ textDecoration: "none",fontSize:13 }}
                          to="/about"
                          className="text-reset"
                        >
                          About us
                        </NavLink>
                      </p>
                      <p>
                        <NavLink
                          style={{ textDecoration: "none",fontSize:13 }}
                          to='/contact'
                          className="text-reset"
                        >
                          Contact us
                        </NavLink>
                      </p>
                      <p>
                        <NavLink
                          style={{ textDecoration: "none",fontSize:13 }}
                          to='/'
                          className="text-reset"
                        >
                          My Account
                        </NavLink>
                      </p>
                    </div>
                    <div className="d-flex flex-column justify-content-end">
                      <p>
                        <NavLink
                          style={{ textDecoration: "none",fontSize:13 }}
                         to='/'
                          className="text-reset"
                        >
                          Order history
                        </NavLink>
                      </p>
                      <p>
                        <NavLink
                          style={{ textDecoration: "none",fontSize:13 }}
                          to='/'
                          className="text-reset"
                        >
                          Advanced search
                        </NavLink>
                      </p>
                      <p>
                        <NavLink
                          style={{ textDecoration: "none",fontSize:13 }}
                          className="text-reset"
                          onClick={handleLoginClick}
                        >
                          Login
                        </NavLink>
                      </p>
                    </div>
                  </div>
                  </div>
                </Col>
                <Col
                  md="6"
                  lg="6"
                  xl="6"
                  className="border-top border-2"
                >
                  <div  className=" d-flex flex-column">
                  <h4 className="text-uppercase fw-bold" style={{fontSize:15}}> 
                    About Us
                  </h4>
                  <p style={{fontSize:13}}>
                    Super Fast Wordpress Theme 1st Fully working Ajax Theme 42
                    Unique Shop Layouts
                  </p>
                  </div>
                </Col>
              </Row>
            </Row>
          </div>

          {/* Footer bottom */}
          <Row className="border-top border-2">
          <span className="my-4" style={{fontSize:11}}>© Porto eCommerce. 2023. All Rights Reserved</span>
          </Row>
        </Container>
      {showLogin && <Login onClose={handleLoginClose} />}
      </footer>

 
  );
};

export default Footer;
