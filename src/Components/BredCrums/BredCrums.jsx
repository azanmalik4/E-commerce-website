import React from "react";
import "./BredCrums.css";
import arrow_icon from "../../assets/arrow_icon.png";
// import {product} from '../../pages/Product.jsx'
const BredCrums = ({product}) => {
  
  return (
    <div className="BredCrums">
      Home <img src={arrow_icon} alt="" height="10px" /> SHOP
      <img src={arrow_icon} alt="" height="10px" />
      {product.category} <img src={arrow_icon} alt="" height="10px" />
      {product.name}
    </div>
  );
};

export default BredCrums;
