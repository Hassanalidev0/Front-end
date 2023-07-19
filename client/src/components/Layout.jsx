import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SideBar from './SideBar';
const Layout = ({ children, type = '' }) => {
  return (
    <>
      <Header />
      <main>
        {type === 'noSidebar' ? (
          <main>{children}</main>
        ) : (
          <main>
            <SideBar />
            <>{children}</>
          </main>
        )}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
