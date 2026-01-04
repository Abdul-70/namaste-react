import {CDN_LOGO} from "../utils/constants.js"
import { useState } from "react";
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
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
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