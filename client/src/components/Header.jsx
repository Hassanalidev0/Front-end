import React from "react";
import Navbar from "./Navbar";
import Topnav from "./Topnav";
import Searchbar from "./Searchbar";
const Header = () => {
  const topData=[]
  return (
    <>
    <div className="container" style={{maxWidth:1200}}>
      <Topnav />
    </div>
      <hr className="container-fluid my-1 p-0" />
      <div className="container" style={{maxWidth:1200}}>
      <Searchbar />
      </div>

      <Navbar />
     
    </>
  );
};

export default Header;
