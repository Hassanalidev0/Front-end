import React from "react";
import { Container, Row, Col, Image, Button, FormControl, InputGroup } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Layout from "../components/Layout";
import { useSelector } from "react-redux";

const Cart = () => {

  const {cart, totalQuantity,subTotal} = useSelector((state) => state.allCart)
  return (
    <Layout type="noSidebar">
    <Container className="my-5" style={{backgroundColor:"white"}}>
      <Row className="justify-content-evenly align-items-center border border-2 p-1 flex-wrap">
        <Col md={9} lg={9} className="border border-2 p-2 d-flex flex-column">
          <div className="d-md-flex p-2 flex-column border border-2">
            <div className="d-md-flex justify-content-evenly d-none d-md-block border border-2 p-1">
              <div className="border border-2 text-center" style={{ width: 120 }}></div>
              <span className="border border-2 text-center" style={{ fontSize: 14, width: 248 }}>
                Products
              </span>
              <span className="border border-2 text-center" style={{ fontSize: 14, width: 105 }}>
                Price
              </span>
              <span className="border border-2 text-center" style={{ fontSize: 14, width: 164 }}>
                Quantity
              </span>
              <span className="border border-2 text-center" style={{ fontSize: 14, width: 114 }}>
                SubTotal
              </span>
            </div>

            { cart.map((item)=> {
             return  <div className="p-1 d-md-flex flex-md-row d-flex flex-column align-items-md-center align-items-center border border-2 justify-content-md-evenly">
              <div className="border border-2 text-center" style={{ width: 120 }}>
                <Image className="border border-2" src={item?.images[0]} style={{ height: 80, width: 80 }} alt="Product" />
              </div>
              <NavLink className="border border-2 text-center" href="/" style={{ fontSize: 14, width: 248, textDecoration: "none" }}>
                {item?.title}
              </NavLink>
              <span className="border border-2 text-center" style={{ fontSize: 14, width: 105 }}>
                ${item?.price}
              </span>
              <span className="border border-2 text-center" style={{ fontSize: 14, width: 164 }}>
                <Button>+</Button>
                <span>{item.quantity}</span>
                <Button>-</Button>
              </span>
              <span className="border border-2 text-center" style={{ fontSize: 14, width: 114 }}>
                ${(item.quantity * item.price).toFixed(2)}
              </span>
            </div>
            })
            }

            <div className="d-md-flex justify-content-md-between p-1 border border-2">
              <div className="text-md-center text-center">
                <InputGroup>
                  <FormControl type="text" style={{ width: 201, height: 43 }} />
                  <Button variant="primary" className="text-nowrap">
                    Apply the Coupon
                  </Button>
                </InputGroup>
              </div>
              <div className="text-md-center text-center mt-1">
                <Button className="btn btn-primary">Update Cart</Button>
              </div>
            </div>
          </div>
        </Col>

        <Col lg={3} className="border border-2 p-2">
          <div className="checkout d-flex flex-column border border-2 p-3">
            <h3>Cart Total</h3>
            <div className="d-flex flex-column">
              <div className="d-flex justify-content-between">
                <span>SubTotal:</span>
                <span>{totalQuantity}</span>
              </div>
              <hr />
            </div>

            <div className="d-flex justify-content-between p-2">
              <span>Total:</span>
              <span>{subTotal}</span>
            </div>
            <Button variant="primary">Proceed To Checkout</Button>
          </div>
        </Col>
      </Row>
    </Container>
    </Layout>
  );
};

export default Cart;
