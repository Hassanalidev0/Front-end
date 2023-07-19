import React from "react";

const Searchbar = () => {
  return (
    <>
      <div className="container searchContainer">
        <div className="row">
          <div className="col-4">
            <a className="navbar-brand searchLogo" href="#">
              <img
                src="/images/logo.png"
                alt="logo"
                width="20%"
                height="auto"
              />
            </a>
          </div>
          <div className="col-4 searchInput">
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
          {/* search menu */}
          <div className="col-4 search-menu ">
            <ul>
              <li><a>Profile</a></li>
              <li><a>WishList</a></li>
              <li><a>Cart</a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Searchbar;
<nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img src="/images/logo.png" alt="logo" width="40%" height="auto" />
    </a>
    {/* search bar */}
    <form class="d-flex" role="search">
      <input
        class="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button class="btn btn-outline-success" type="submit">
        Search
      </button>
    </form>

    {/* search bar right end */}
    <div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Profile
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Wish List
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Cart
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>;
