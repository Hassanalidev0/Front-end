import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Login from '../views/auth/Login'; // Assuming Login component is in a separate file
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
    <>
      <footer className="text-center text-lg-start p-2" >
        <Container >
          <Row className="justify-content-between p-2 border border-2">
            <Col lg="6" className="d-none d-lg-block border border-2">
              <span>Get connected with us on social networks:</span>
            </Col>
            <Col lg="6" className="d-none d-lg-block border border-2">
              <Form>
                <Form.Group className="mb-3 d-flex align-items-center">
                  <Form.Label className="me-2 text-nowrap">SUBSCRIBE NEWSLETTER:</Form.Label>
                  <Form.Control type="email" />
                  <Button type="submit">SUBSCRIBE</Button>
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Row className=" justify-content-lg-evenly justify-content-md-evenly">
            <Col md="4" lg="3" xl="3" className="border border-2 d-flex flex-column">
              <h6 className="text-uppercase fw-bold">
              <i class="bi bi-gem">About Us</i>
              </h6>
              <p>
                Super Fast Wordpress Theme 1st Fully working Ajax Theme 42 Unique Shop Layouts
              </p>
            </Col>
            <Col md="4" lg="4" xl="4" className="border border-2 ">
              <h6 className="text-uppercase fw-bold">Customer Services</h6>
             <div className="d-lg-flex d-md-flex justify-content-between">
             <div className="d-flex flex-column">
              <p><NavLink style={{textDecoration:'none'}} href="#!" className="text-reset">About us</NavLink></p>
              <p><NavLink style={{textDecoration:'none'}} href="#!" className="text-reset">Contact us</NavLink></p>
              <p><NavLink style={{textDecoration:'none'}} href="#!" className="text-reset">My Account</NavLink></p>
              </div>
              <div className="d-flex flex-column justify-content-end">
              <p><NavLink style={{textDecoration:'none'}} href="#!" className="text-reset">Order history</NavLink></p>
              <p><NavLink style={{textDecoration:'none'}} href="#!" className="text-reset">Advanced search</NavLink></p>
              <p><NavLink style={{textDecoration:'none'}} href="#!" className="text-reset" onClick={handleLoginClick}>Login</NavLink></p>
              </div>
             </div>
            </Col>
           
            <Col md="4" lg="3" xl="3" className="border border-2 d-flex flex-column">
              <h6 className="text-uppercase fw-bold mb-4">Contact info</h6>
              <div className="d-flex flex-column">
                <span>
                <i class="bi bi-house-door"> 1234 Street Name, City, England</i>
                </span>
                <span>
                <i class="bi bi-envelope"> mail@example.com</i>
                </span>
                <span>
                <i class="bi bi-telephone"> 123-456-7890</i>
                </span>
              </div>
              <div>
                <div className="d-flex justify-content-lg-center justify-content-md-center">
                  <a href="" className="me-4 link-secondary">
                  <i class="bi bi-facebook"></i>
                  </a>
                  <a href="" className="me-4 link-secondary">
                  <i class="bi bi-twitter"></i>
                  </a>
                  <a href="" className="me-4 link-secondary">
                  <i class="bi bi-instagram"></i>
                  </a>
                </div>
              </div>
            </Col>
          </Row>

        {/* Footer bottom */}
        <span>© Porto eCommerce. 2023. All Rights Reserved</span>
        </Container>
      </footer>

      {showLogin && (
        <div className="login-popup">
          <Login onClose={handleLoginClose} />
        </div>
      )}
    </>
  );
};

export default Footer;
