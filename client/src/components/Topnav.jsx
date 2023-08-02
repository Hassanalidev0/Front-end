import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Login from "../views/auth/Login";
import { Container, Row, Col } from "react-bootstrap";

const Topnav = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleLoginClose = () => {
    setShowLogin(false);
  };

  return (
    <Container>
      <Row className="d-flex align-items-end  ">
        <Col  lg={3} md={3} className="d-none d-lg-block d-md-block">
          <span className="d-flex align-items-center text-nowrap" style={{ fontSize: 8 }}>
            FREE RETURNS. STANDARD SHIPPING ORDERS $99+
          </span>
        </Col>

        <Col  lg={6} md={6} className=" d-none d-lg-block d-md-block ">
         <div className="list-unstyled d-flex justify-content-end" style={{ fontSize: 9 }}>
            <span className="mx-1">
              <NavLink href="#" style={{ textDecoration: "none" }}>
                My Account
              </NavLink>
            </span>
            <span className="mx-1">
              <NavLink href="#" style={{ textDecoration: "none" }}>
                About us
              </NavLink>
            </span>
            <span className="mx-1">
              <NavLink href="#" style={{ textDecoration: "none" }}>
                Blog
              </NavLink>
            </span>
            <span className="mx-1">
              <NavLink href="#" style={{ textDecoration: "none" }}>
                My Wishlist
              </NavLink>
            </span>
            <span className="mx-1">
              <NavLink href="#" style={{ textDecoration: "none" }}>
                Cart
              </NavLink>
            </span>
            <span className="mx-1">
              <NavLink style={{ textDecoration: "none" }} onClick={handleLoginClick}>
                Login
              </NavLink>
            </span>
          </div>
        
        </Col>

        <Col xs={2} lg={2} md={2} className="d-flex align-items-end justify-content-lg-end">
          <div className="d-sm-flex justify-content-end align-items-end">
            <select className="text-center" style={{ fontSize: 9 }}>
              <option>USD</option>
              <option>EUR</option>
            </select>
            <select className="text-center" style={{ fontSize: 9 }}>
              <option>ENG</option>
              <option>FRH</option>
            </select>
          </div>
        </Col>

        <Col xs={2} lg={1} md={1} className="d-flex align-items-end justify-content-lg-end ">
          <div className="d-sm-flex flex-row justify-content-end">
            <NavLink href="#" className="mx-2">
              <i style={{ width: 26, height: 22, fontSize: 15 }} className="bi bi-facebook"></i>
            </NavLink>
            <NavLink href="#" className="mx-2">
              <i className="bi bi-twitter" style={{ width: 26, height: 22, fontSize: 15 }}></i>
            </NavLink>
          </div>
        </Col>
      </Row>
      {showLogin && <Login onClose={handleLoginClose} />}
    </Container>
  );
};

export default Topnav;
