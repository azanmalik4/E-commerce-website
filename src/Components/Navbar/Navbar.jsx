import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.webp";
import cart_icon from "../../assets/cart_icon.png";
import {BrowserRouter,Routes,Link, Route} from "react-router-dom"
import { ShopContext2 } from "../../Context/ShopContext2";

const Navbar = () => {

 const [menu, setMenu] = useState("home");
const {getTotalCartItems} = useContext(ShopContext2);
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" height={"50px"} />
        <p>Shopify</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("home")}}> <Link style={{textDecoration:"none",color:"#626262"}} to="/" >Home</Link> {menu ==="home"? <hr/>: <></>}</li>
        <li onClick={()=>{setMenu("men")}} > <Link style={{textDecoration:"none",color:"#626262"}} to="/mens" > Men</Link> {menu ==="men"? <hr/>: <></>} </li>
        <li onClick={()=>{setMenu("womens")}} > <Link to="/women" style={{textDecoration:"none",color:"#626262"}}  > Womens</Link>  {menu ==="womens"? <hr/>: <></>}</li>
        <li onClick={()=>{setMenu("kids")}} > <Link to="/kids" style={{textDecoration:"none",color:"#626262"}} > Kids</Link> {menu ==="kids"? <hr/>: <></>}</li>
        <div className="nav-login-cart">
          <Link to="/login" > <button>Login</button> </Link>
          
         <Link to='/cart' > <img src={cart_icon} alt="" height={"40px"} /></Link>
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
