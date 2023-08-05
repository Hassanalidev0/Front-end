import React, {  useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import Layout from './Layout';
import { addToCart,changeItemQuantity } from '../features/cartSlice';

const ProductDetail = () => {
  const dispatch = useDispatch();
  const { itemId } = useParams();
  const location = useLocation();
  const item = location?.state?.item;

  const [quantity, setQuantity] = useState(1);
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleAddToCart = () => {
    dispatch(addToCart({ ...item, quantity: quantity}))
    dispatch(changeItemQuantity({ id: item.id, newQuantity:quantity}))
  };
  return (
    <Layout type='noSidebar'>
      <Container className='my-4'>
        
          <Row className='p-2  border gap-2 border-2' key={itemId}>
            <Col md={5} lg={5} className=' d-flex justify-content-end' >
              <div className='product-image border border-2 d-flex justify-content-end' style={{ width: 459, height: 459 }}>
                <Image src={item?.images[0]} className='w-100 h-100' />
              </div>
            </Col>
            <Col md={6} lg={6} className='border border-2'>
              <div className='product-content d-flex flex-column'>
                <h2 style={{ fontSize: 25, fontFamily: 'Poppins' }}>{item?.title}</h2>
                <span>Rating: {item?.rating}</span>
                <hr />
                <span style={{ fontSize: 24 }}>{`${item?.price} $`}</span>

                <div style={{ maxWidth: 656, maxHeight: 81 }} className='mb-5'>
                  <p style={{ fontSize: 15.99, width: 'fit-content' }}>{item?.description}</p>
                </div>

                <div className='d-flex'>
                  <span>Colors: </span>
                  <ul className='d-flex' style={{ listStyle: 'none' }}>
                    <li className='mx-1'>
                      <button className='border border-1 black text-decoration-none bg-dark w-100 h-100'></button>
                    </li>
                    <li className='mx-1'>
                      <button className='border border-1 black text-decoration-none bg-danger w-100 h-100'></button>
                    </li>
                    <li className='mx-1'>
                      <button className='border border-1 black text-decoration-none bg-primary w-100 h-100'></button>
                    </li>
                  </ul>
                </div>

                <div className='d-flex'>
                  <span>Size: </span>
                  <ul className='d-flex' style={{ listStyle: 'none' }}>
                    <li className='mx-1'>
                      <button className='border border-1 black text-decoration-none'>S</button>
                    </li>
                    <li className='mx-1'>
                      <button className='border border-1 black text-decoration-none'>XL</button>
                    </li>
                    <li className='mx-1'>
                      <button className='border border-1 black text-decoration-none'>L</button>
                    </li>
                    <li className='mx-1'>
                      <button className='border border-1 black text-decoration-none'>M</button>
                    </li>
                  </ul>
                </div>

                <hr />
                <div className='d-flex gap-2'>
                <Button onClick={handleIncrement}>+</Button>
        <input
          type='number'
          style={{ width: 50, height: 50 }}
          value={quantity}
          readOnly
        />
        <Button onClick={handleDecrement}>-</Button>
        <Button
          className='btn btn-primary'
          onClick={handleAddToCart}
          style={{ width: 171.78, height: 48 }}
        >
          Add to cart
        </Button>
                </div>
                <hr />
              </div>
            </Col>
          </Row>
        
      </Container>
    </Layout>
  );
};

export default ProductDetail;
