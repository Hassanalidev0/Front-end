import React from "react";
import { Navbar, Nav, Form, FormControl, Button, Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Searchbar = () => {
  const navigate = useNavigate()
  return (
    <Navbar className="d-flex flex-wrap align-items-center d-sm-flex justify-content-between">
      <Navbar.Brand href="#">
        <img src="/images/logo.png" alt="logo" style={{ width: 101, height: 40 }} />
      </Navbar.Brand>

      <Form className="col-lg-6 d-lg-block d-none ">
        <div className="d-flex p-2 justify-content-center">
          <FormControl
            className="border border-2 rounded-start-5"
            type="search"
            placeholder="Search"
            aria-label="Search"
            style={{ width: 374, height: 40 }}
          />
          <Button variant="outline-success text-wrap border border-2 rounded-end-5" type="submit" style={{ width: 52, height: 40 }}>
            <i className="bi bi-search"></i>
          </Button>
        </div>
      </Form>

      <Nav className="col-lg-2 d-lg-block d-none">
        <Nav.Item className="d-flex align-items-center">
          <i className="bi bi-telephone" style={{ width: 29, height: 29, fontSize: 23 }}></i>
          <div className="d-flex flex-column align-items-center">
            <span>Call Us Now</span>
            <span>+123 5678 890</span>
          </div>
        </Nav.Item>
      </Nav>

      <Nav className="col-lg-2 col-6  justify-content-end d-lg-flex justify-content-lg-end ">
        <Button to="/cart" style={{ backgroundColor:"white", border:'none',width:50, height:"auto" }} className="d-flex ">
        <i className="bi bi-person " style={{ fontSize:26, color:"black" }}></i> 
        </Button>
        <Button to="/cart" style={{ backgroundColor:"white", border:'none', width:50, height:"auto" }} className="d-flex ">
        <i className="bi bi-heart " style={{ fontSize:26 , color:"black" }}></i><Badge pill bg="secondary" style={{fontSize:10}}>{0}</Badge> 
        </Button>
        <Button  onClick={() => navigate('/cart')} style={{ backgroundColor:"white", border:'none', width:50, height:"auto" }} className="d-flex ">
          <i className="bi bi-bag " style={{ color:"black",  fontSize:26   }}  ></i><Badge pill bg="secondary" style={{fontSize:10}}>{0}</Badge> 
        </Button>
      </Nav>
    </Navbar>
  );
};

export default Searchbar;
