import React from "react";
import Navbar from "./Navbar";
import Topnav from "./Topnav";
import Searchbar from "./Searchbar";
const Header = () => {
  const topData=[]
  return (
    <>
      <Topnav />
      <Searchbar />
      <Navbar />
    </>
  );
};

export default Header;
