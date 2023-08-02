import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SideBar from './SideBar';
import Slider from './Slider';

const Layout = ({ children, type = '', selectedCategory, onCategoryClick, categories }) => {
  return (
    <>
      <Header />
      <main>
        {type === 'noSidebar' ? (
          <main>{children}</main>
        ) : type === 'leftSidebar' ? (
          <>

          <Slider />
          <div className='container'>
          <div className=' d-lg-flex d-md-flex gap-5 my-3'>
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
      <div className='container' style={{border:'1px solid red'}}>

      <Footer />
      </div>
    </>
  );
};

export default Layout;
