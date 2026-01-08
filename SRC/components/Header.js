import {CDN_LOGO} from "../utils/constants.js"
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../utils/images/numfood.png";



const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  return (
    <div className="header">
      <div className="logo">
        <img
          src={CDN_LOGO}
          alt=""
        />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li>Cart</li>
          <li><button className="login"
          onClick={()=>{
            btnName === "Login" ? setBtnName("Logout"): setBtnName("Login");
          }}>{btnName}</button></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;