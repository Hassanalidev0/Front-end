import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the scroll position is greater than 0 to make the navbar sticky
      const triggerHeight = 100; // Adjust this value as needed
      const scrollPosition = window.scrollY;
      setIsSticky(scrollPosition > triggerHeight);
    };

    // Add event listener for scroll event
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className={` navbarContainer container${isSticky ? '-fluid m-0 p-0 sticky-top' : ' sticky-top'}`}>
      <div className='container'>
      <nav className="navbar navbar-expand-lg  sticky-top">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item dropdown megamenu">
                <a
                  className="nav-link dropdown-toggle active"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  CATEGORIES
                </a>
                <div className="dropdown-menu megamenu-content">
                  <div className="row">
                    <div className="col">
                      <h3 className="menu-title">Category 1</h3>
                      <ul className="sub-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Action 1
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Another action 1
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Something else here 1
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col">
                      <h3 className="menu-title">Category 2</h3>
                      <ul className="sub-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Action 2
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Another action 2
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Something else here 2
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col">
                      <h3 className="menu-title">Category 3</h3>
                      <ul className="sub-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Action 3
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Another action 3
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Something else here 3
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown megamenu">
                <NavLink
                  className="nav-link dropdown-toggle active"
                 to="/productList"
                  role="button"
                  
                  aria-expanded="false"
                >
                  PRODUCTS
                </NavLink>
                <div className="dropdown-menu megamenu-content">
                  <div className="row">
                    <div className="col">
                      <h3 className="menu-title">Products 1</h3>
                      <ul className="sub-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Product 1
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Product 2
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Product 3
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col">
                      <h3 className="menu-title">Products 2</h3>
                      <ul className="sub-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Product 4
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Product 5
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Product 6
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col">
                      <h3 className="menu-title">Products 3</h3>
                      <ul className="sub-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Product 7
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Product 8
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Product 9
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle active"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  FEATURES
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/blog">
                  BLOG
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  ABOUT US
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Special Offer
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Buy Offer
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
    </div>
  );
};

export default Navbar;

