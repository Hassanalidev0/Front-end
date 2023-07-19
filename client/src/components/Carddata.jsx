import React from 'react';
import Cardslider from './Cardslider';

const Carddata = () => {
  const products = [
    {
      id: 1,
      name: 'Phone',
      Price: 100
    },
    {
      id: 2,
      name: 'Phone',
      Price: 100
    },
    {
      id: 3,
      name: 'Phone',
      Price: 100
    },
    {
      id: 4,
      name: 'Phone',
      Price: 100
    },
    {
      id: 5,
      name: 'Phone',
      Price: 100
    },
    {
      id: 6,
      name: 'Phone',
      Price: 100
    }
  ];

  return (
    <>
      <Cardslider products={products} key={`${products?.id}`} />
    </>
  );
};

export default Carddata;
