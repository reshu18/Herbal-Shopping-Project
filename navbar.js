import React from "react";
import "../styles/navbar.css";
import navItems from './Navitems'

const Navbar = ({ setShow, size }) => {
  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop" onClick={() => setShow(true)}>
          Herbal Shop
        </span>
        <div className="cart" onClick={() => setShow(false)}>
          <span>
            <i className="fas fa-cart-plus"></i>
          </span>
      
          <span>{size}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
