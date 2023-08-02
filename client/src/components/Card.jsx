// import React, { useEffect, useState } from "react";
import { NavLink } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Card = ({item}) => {

  const navigate = useNavigate();
  const handleProductClick = () => {
    navigate(`/productDetail/${item.id}`, { state: { item: item } });
  };

  return (
    <div
    style={{padding: "10px", gap: "10px", width:232, height:372, backgroundColor:"white", borderRadius:"0.3rem" }}
    className=" container d-flex flex-column "
  >
    <div className="card-img p-4 " style={{  width:212,height:212,backgroundColor:'rgba(0,0,0,0.1)'}}>
      <img
        src={item.images[0]}
        className="w-100 h-100"
        
      />
    </div>
  {/* <div className="h-50 d-flex flex-column justify-content-between p-2" style={{backgroundColor: 'rgba(0,0,0,0.1)'  }} > */}
  <div className="card-content h-50 p-1 d-flex flex-column" style={{ display:"flex",flexDirection:"column",justifyContent:"space-between", wdith:212, height:'auto', gap:2 }}>
      <div className="d-flex justify-content-between align-items-center">
        <span style={{fontFamily:"Poppins",fontSize:10}}>{item?.category}</span>
       <button style={{border:'none', backgroundColor:"white"}}>
        <i className="bi bi-heart " style={{ height: "16.8px", width: "19.59px"}}></i>
       </button>
       
      </div>
        <NavLink className="card-name" onClick={handleProductClick} style={{fontSize:13,fontFamily:"Poppins",textDecoration:"none",color:"black" }}>{item?.title}</NavLink>
        <span style={{fontFamily:"Poppins",fontSize:10}}>rating</span>
        <span style={{fontFamily:"Poppins",fontSize:18,fontWeight:600}}>${item?.price}</span>
        
    </div>
  {/* </div> */}
  </div>
  );
};

export default Card;
