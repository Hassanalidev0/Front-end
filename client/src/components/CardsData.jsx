import React from 'react';
import Cardslider from './Cardslider';

const CardsData = () => {
  const products = [
    {
      id: 1,
      name: 'Phone 1',
      price: 100,
      img: '/images/product1.jpg', // Add the image path for Phone 1
    },
    {
      id: 2,
      name: 'Phone 2',
      price: 200,
      img: '/images/product2.jpg', // Add the image path for Phone 2
    },
    {
      id: 3,
      name: 'Phone 3',
      price: 300,
      img: '/images/product3.jpg', // Add the image path for Phone 3
    }
  ];

  return (
    
      <Cardslider products={products} />
   
  );
};

export default CardsData;