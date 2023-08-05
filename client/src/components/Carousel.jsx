import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CarouselComponent = () => {
  const navigate = useNavigate();
  const images = [
    {
      src: '/images/slide1.jpg',
      alt: 'Slide 1',
      style: {
        // CSS properties for the first image
        color: 'black',
        fontSize: '24px',
      },
      content: {
        // Content for the first image
        title: 'Find Boundaries',
        description: 'Jean Sale',
        subtitle: 'Upto 80% Off',
        startingAt: `$${99.99}`
      },
    },
    {
      src: '/images/slide2.jpg',
      alt: 'Slide 2',
      style: {
        // CSS properties for the second image
        color: 'black',
        fontSize: '20px',
      },
      content: {
        // Content for the second image
        title: 'Women Business Fashion',
        subtitle: 'Upto 60% Off',
        startingAt: `$${29.99}`
      },
    },
    // Add more images here if needed
  ];

  return (
    <div className='container my-2 p-1' style={{ backgroundColor: 'white' }}>
      <Carousel>
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <div
              className=' d-flex flex-column align-items-start justify-content-center'
              style={{
                ...image.style, // Merge the image-specific styles with the default styles
                background: `url(${image.src}) center/cover`, // Set the image as background
                height: '80vh', // Set the height to fill the whole viewport height
              }}
            >
              {/* Add any content you want here */}
              <div className='d-flex flex-column align-items-start  ms-5' style={{ width: '80%',height:'229px', maxWidth: '500px',maxHeight:'229px' }}>
                <h5 style={{ fontSize: 'clamp(1rem, 3vw, 19px)', color: 'black' }}>{image.content.title}</h5>
                <h5 style={{ fontSize: 'clamp(2.4rem, 3vw, 62px)', color: 'red' }}>{image.content.description}</h5>
                <h5 style={{ fontSize: 'clamp(2.8rem, 3vw, 74px)', color: 'black' }}>{image.content.subtitle}</h5>
                <div className='d-flex flex-row align-items-end justify-content-between gap-1'>
                  <span style={{ color: 'red' }}>Starting At {image.content.startingAt} </span>
                  <Button onClick={() => navigate('/productList')} style={{ width: '168px', height: '53px' }}>Shop Now</Button>
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
