import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Global.css";
import Logo from "../images/logo.png";
function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-light sticky-top">
      <div class="container">
        <div className="logo text-center ">
          <Link to="/">
            <img src={Logo} />
            <h5>Tasty Treat</h5>
          </Link>
        </div>
        <div className="navigation d-none d-sm-block">
          <div className="menu d-flex align-items-center gap-5">
            <Link to="/">
              <a className="active-menu" aria-current="page">
                Home
              </a>
            </Link>
            <Link to="/foods">
              <a>Foods</a>
            </Link>
            <Link to="/cartpage">
              <a>Cart</a>
            </Link>
            {/* <a>Contact</a> */}
          </div>
        </div>
        <div className="nav__right d-flex align-items-center gap-4">
          <span className="cart__icon">
            <i class="bi bi-cart-plus-fill"></i>
            <span className="cart__badge">0</span>
          </span>
          <span className="user">
            <a>
              <i class="bi bi-person-fill"></i>
            </a>
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
