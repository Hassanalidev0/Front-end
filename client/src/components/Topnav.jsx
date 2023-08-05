import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Login from "../views/auth/Login";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/authSlice";
import Register from "../views/auth/Register";

const Topnav = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const {isAuthenticated} =  useSelector((state) => state?.user)

  const dispatch = useDispatch()
  const handleLoginClick = () => {
    setShowLogin(true);
    setShowRegister(false)
  };

  const handleLoginClose = () => {
    setShowLogin(false);
  };
  const handleRegisterClick = () => {
    setShowRegister(true);
    setShowLogin(false);
  };

  const handleRegisterClose = () => {
    setShowRegister(false);
    setShowLogin(false);
  };

  return (
    <Container className="  ">
      <Row className="d-flex align-items-end   ">
        <Col  lg={3} md={3} className="d-none d-lg-block d-md-block">
          <span className="d-flex justify-content-start align-items-center text-nowrap" style={{ fontSize: 8 }}>
          FREE RETURNS. STANDARD SHIPPING ORDERS $99+
          </span>
        </Col>

        <Col  lg={6} md={6} className=" d-none d-lg-block d-md-block ">
         <div className="list-unstyled d-flex justify-content-end" style={{ fontSize: 9 }}>
            <span className="mx-1">
              <NavLink to="/myaccount" style={{ textDecoration: "none" }}>
                My Account
              </NavLink>
            </span>
            <span className="mx-1">
              <NavLink to="/about" style={{ textDecoration: "none" }}>
                About us
              </NavLink>
            </span>
            <span className="mx-1">
              <NavLink to="/blog" style={{ textDecoration: "none" }}>
                Blog
              </NavLink>
            </span>
            <span className="mx-1">
              <NavLink to='/' style={{ textDecoration: "none" }}>
                My Wishlist
              </NavLink>
            </span>
            <span className="mx-1">
              <NavLink to="/cart" style={{ textDecoration: "none" }}>
                Cart
              </NavLink>
            </span>
            {isAuthenticated ? (
              <span className="mx-1">
                <NavLink  style={{ textDecoration: "none" }} onClick={() => dispatch(logout())}>
                  Logout
                </NavLink>
              </span>
            ) : (
              <span className="mx-1">
                <NavLink style={{ textDecoration: "none" }} onClick={handleLoginClick}>
                  Login
                </NavLink>
              </span>
            )}
          </div>
        
        </Col>

        <Col xs={2} lg={2} md={2} className="d-flex align-items-end justify-content-lg-end ">
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
            <NavLink href="http://Facebook.com" rel="noreferrer" target="_blank" className="mx-2">
              <i style={{ width: 26, height: 22, fontSize: 15 }} className="bi bi-facebook"></i>
            </NavLink>
            <NavLink href="https://twitter.com" rel="noreferrer" target="_blank"  className="mx-2">
              <i className="bi bi-twitter" style={{ maxWidth: 26, maxHeight: 22, fontSize: 15 }}></i>
            </NavLink>
          </div>
        </Col>
      </Row>
      {showLogin && <Login onClose={handleLoginClose} onClick ={handleRegisterClick} />}
      {showRegister && <Register onClose={handleRegisterClose} onClick={handleLoginClick} />}
    </Container>
  );
};

export default Topnav;
