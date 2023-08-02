import React, { useEffect, useState } from 'react';
import Carousel from '../components/Carousel';
import Slider from '../components/Slider';
import Layout from '../components/Layout';
import CardsData from '../components/CardsData';
import Card from '../components/Card';
import ProductData from '../api/ProductData';

const Home = () => {
  const renderCardsData = Array.from({ length: 3 });

  const productsPerPage = 10; // Number of products to show per page
  const loadMoreIncrement = 10; // Number of products to load each time the button is clicked

  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(productsPerPage);

  const fetchData = async () => {
    try {
      const data = await ProductData();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleLoadMore = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + loadMoreIncrement);
  };

  return (
    <Layout type="noSidebar">
      {/* Render Slider and Carousel components */}
      <Slider />

      <Carousel />


      <div className="container d-flex flex-wrap justify-content-around  my-5 " style={{backgroundColor:'white'}}>
        {renderCardsData.map((item, index) => (
          <div className="my-5 border border-2 slidingCard p-2" style={{backgroundColor:'rgba(0, 0, 0, 0.1)'}}>
            {/* Render CardsData component */}
            <CardsData />
          </div>
        ))}
      </div>

      <div className="container my-5">
        <div
          className="row d-flex justify-content-evenly flex-wrap p-1"
          style={{ background: 'white' }}
        >
          {/* Render only the specified number of products based on the visibleProducts state */}
          {products.slice(0, visibleProducts).map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>

        {/* Container for the "Load More" button outside of flex */}
        <div style={{ display: 'flex', justifyContent: 'center', margin: '10px 0' }}>
          {/* Show the "Load More" button if there are more products to load */}
          {visibleProducts < products.length && (
            <button className='btn btn-primary' onClick={handleLoadMore}>Load More</button>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
