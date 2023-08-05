import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SideBar from './SideBar';
import Slider from './Slider';
import Sale from './Sale';

const Layout = ({ children, type = '', selectedCategory, onCategoryClick, categories }) => {
  return (
    <>

      <Header />
    <div className='container' style={{maxWidth:1200}}>
      <main>
        {type === 'noSidebar' ? (
          <main>{children}</main>
        ) : type === 'leftSidebar' ? (
          <>

          <Slider />
          <div className='container'>
          <div className='row my-2' style={{
            background: `url(${'/images/sale.jpg'}) center/cover`,
            height:277
        }}>
          <Sale />
          </div>
          <div className='  d-lg-flex d-md-flex gap-5 my-3'>
            <SideBar selectedCategory={selectedCategory} onCategoryClick={onCategoryClick} categories={categories} />
            <main>
              {children}
            </main>
          </div>
          </div>
          </>
        ) : type === 'rightSidebar' ? (
          <div className='container d-lg-flex d-md-flex gap-5 my-3'>
            <main>
              {children}
            </main>
            <SideBar selectedCategory={selectedCategory} onCategoryClick={onCategoryClick} categories={categories} />
          </div>
        ) : null}
      </main>
     
      <Footer  />
    
    </div>
    </>
  );
};

export default Layout;
