import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

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
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={` container${
        isSticky ? "-fluid m-0 p-0 sticky-top navbarContainer" : "  sticky-top"
      }`}
      style={isSticky ? {} : { maxWidth: 1200 }}
    >
      <div className="container navbarContainer">
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
              <ul className={isSticky ? "navbar-nav ms-5" : "navbar-nav"}>
                <li className="nav-item">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                
                <li className="nav-item dropdown megamenu">
                  <NavLink
                    className="nav-link dropdown-toggle active"
                    
                    role="button"
                    aria-expanded="false"
                  >
                    CATEGORIES
                  </NavLink>
                  <div
                    className="dropdown-menu megamenu-content text-start"
                    style={{ maxWidth: 580 }}
                  >
                    <div className="d-lg-flex d-md-flex gap-5">
                      <div className="">
                        <span className="menu-title text-nowrap">
                          VARIATION 1
                        </span>
                        <ul
                          className="sub-menu  "
                          style={{ listStyle: "none",display:"contents" }}
                        >
                          <li className="m-0 p-0">
                            <a className="dropdown-item" to="/">
                              Style 1
                            </a>
                          </li>
                          <li className="m-0 p-0">
                            <a className="dropdown-item" to="/">
                              Style 2
                            </a>
                          </li>
                          <li className="m-0 p-0">
                            <a className="dropdown-item" to="/">
                              Style 3
                            </a>
                          </li>
                          <li className="m-0 p-0">
                            <a className="dropdown-item" to="/">
                              Style 4
                            </a>
                          </li>
                          <li className="m-0 p-0">
                            <a className="dropdown-item" to="/">
                              Style 5
                            </a>
                          </li>
                          <li className="m-0 p-0">
                            <a className="dropdown-item" to="/">
                              Style 6
                            </a>
                          </li>
                          <li className="m-0 p-0">
                            <a className="dropdown-item" to="/">
                              Style 7
                            </a>
                          </li>
                          <li className="m-0 p-0">
                            <a className="dropdown-item" to="/">
                              Style 8
                            </a>
                          </li>
                          <li className="m-0 p-0">
                            <a className="dropdown-item" to="/">
                              Style 9
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="">
                        <span className="menu-title text-nowrap">
                          VARIATION 2
                        </span>
                        <ul
                          className="sub-menu  "
                          style={{ listStyle: "none",display:"contents" }}
                        >
                          <li className="m-0 p-0">
                            <a className="dropdown-item" to="/">
                              Style 1
                            </a>
                          </li>
                          <li className="m-0 p-0">
                            <a className="dropdown-item" to="/">
                              Style 2
                            </a>
                          </li>
                          <li className="m-0 p-0">
                            <a className="dropdown-item" to="/">
                              Style 3
                            </a>
                          </li>
                          <li className="m-0 p-0">
                            <a className="dropdown-item" to="/">
                              Style 4
                            </a>
                          </li>
                          <li className="m-0 p-0">
                            <a className="dropdown-item" to="/">
                              Style 5
                            </a>
                          </li>
                          <li className="m-0 p-0">
                            <a className="dropdown-item" to="/">
                              Style 6
                            </a>
                          </li>
                          <li className="m-0 p-0">
                            <a className="dropdown-item" to="/">
                              Style 7
                            </a>
                          </li>
                          <li className="m-0 p-0">
                            <a className="dropdown-item" to="/">
                              Style 8
                            </a>
                          </li>
                          <li className="m-0 p-0">
                            <a className="dropdown-item" to="/">
                              Style 9
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
                    
                    role="button"
                    aria-expanded="false"
                  >
                    PRODUCTS
                  </NavLink>
                  <div
                    className="dropdown-menu megamenu-content text-start  "
                    style={{ maxWidth: 580 }}
                  >
                    <div className="d-lg-flex d-md-flex  gap-5">
                      <div className=" d-flex flex-column">
                        <div>
                        <span className="menu-title text-nowrap">
                          PRODUCTS STYLE
                        </span>
                        </div>
                        <div>
                        <ul
                          className="sub-menu  "
                          style={{ listStyle: "none",display:"contents" }}
                        >
                          <li className="m-0 p-0">
                            <a className="dropdown-item" to="/">
                              Style 1
                            </a>
                          </li>
                          <li className="m-0 p-0">
                            <a className="dropdown-item" to="/">
                              Style 2
                            </a>
                          </li>
                          <li className="m-0 p-0">
                            <a className="dropdown-item" to="/">
                              Style 3
                            </a>
                          </li>
                          <li className="m-0 p-0">
                            <a className="dropdown-item" to="/">
                              Style 4
                            </a>
                          </li>
                          <li className="m-0 p-0">
                            <a className="dropdown-item" to="/">
                              Style 5
                            </a>
                          </li>
                          <li className="m-0 p-0">
                            <a className="dropdown-item" to="/">
                              Style 6
                            </a>
                          </li>
                          <li className="m-0 p-0">
                            <a className="dropdown-item" to="/">
                              Style 7
                            </a>
                          </li>
                          <li className="m-0 p-0">
                            <a className="dropdown-item" to="/">
                              Style 8
                            </a>
                          </li>
                          <li className="m-0 p-0">
                            <a className="dropdown-item" to="/">
                              Style 9
                            </a>
                          </li>
                        </ul>
                        </div>
                      </div>
                     
                      <div className=" d-flex flex-column">
                        <div>
                        <span className="menu-title text-nowrap">
                          PRODUCTS LAYOUT
                        </span>
                        </div>
                        <div>
                        <ul
                          className="sub-menu  "
                          style={{ listStyle: "none",display:"contents" }}
                        >
                          <li className="m-0 p-0">
                            <a className="dropdown-item" to="/">
                              Style 1
                            </a>
                          </li>
                          <li className="m-0 p-0">
                            <a className="dropdown-item" to="/">
                              Style 2
                            </a>
                          </li>
                          <li className="m-0 p-0">
                            <a className="dropdown-item" to="/">
                              Style 3
                            </a>
                          </li>
                          <li className="m-0 p-0">
                            <a className="dropdown-item" to="/">
                              Style 4
                            </a>
                          </li>
                          <li className="m-0 p-0">
                            <a className="dropdown-item" to="/">
                              Style 5
                            </a>
                          </li>
                          <li className="m-0 p-0">
                            <a className="dropdown-item" to="/">
                              Style 6
                            </a>
                          </li>
                          <li className="m-0 p-0">
                            <a className="dropdown-item" to="/">
                              Style 7
                            </a>
                          </li>
                          <li className="m-0 p-0">
                            <a className="dropdown-item" to="/">
                              Style 8
                            </a>
                          </li>
                          <li className="m-0 p-0">
                            <a className="dropdown-item" to="/">
                              Style 9
                            </a>
                          </li>
                        </ul>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle active"
                    to="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    FEATURES
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" to="/">
                        Feature 1
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" to="/">
                      Feature 2
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" to="/">
                      Feature 3
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" to="/">
                      Feature 4
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" to="/">
                      Feature 5
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" to="/">
                      Feature 6
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" to="/">
                      Feature 7
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" to="/">
                      Feature 8
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" to="/">
                      Feature 9
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
              <ul className={isSticky ? "navbar-nav me-5" : "navbar-nav"}>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" to="/">
                    Special Offer
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" to="/">
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
