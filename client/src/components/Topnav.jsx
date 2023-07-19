import React from "react";

const Topnav = () => {
  return (
    <>
      <div className="container topContainer">
        <div className="row">
          <div className="col-3  topnavText">
            <div>
              FREE RETURNS. STANDARD SHIPPING ORDERS $99+
            </div>
          </div>
          <div className="col-5 ">
            <div>
              <ul className="topMenue">
                <li>
                  <a href="" className="top">
                    My Account
                  </a>
                </li>
                <li>
                  <a href="" className="top">
                    About us
                  </a>
                </li>
                <li>
                  <a href="" className="top">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="" className="top">
                    My Wishlist
                  </a>
                </li>
                <li>
                  <a href="" className="top">
                    Cart
                  </a>
                </li>
                <li>
                  <a href="" className="top">
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-2">
            <div>
              <select className="top-select">
                <option>USD</option>
                <option>EUR</option>
              </select>
              <select className="top-select">
                <option>END</option>
                <option>FRH</option>
              </select>
            </div>
          </div>
          <div className="col-2">
            <div className="topicon">
              <a href="" className="">
                Facebook
              </a>
              <a href="" className="">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Topnav;