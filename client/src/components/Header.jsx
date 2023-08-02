import React from "react";
import Navbar from "./Navbar";
import Topnav from "./Topnav";
import Searchbar from "./Searchbar";
const Header = () => {
  const topData=[]
  return (
    <>
      <Topnav />
      <hr className="container-fluid my-1 p-0" />
      <div className="container">
      <Searchbar />
      </div>
      <Navbar />
    </>
  );
};

export default Header;
