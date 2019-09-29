import React from 'react';
import './Header.css';
import { Link, NavLink, Redirect } from 'react-router-dom';

function Header() {
  return (
    <nav class="navbar navbar-expand-sm  navbar-light ">
      <a class="navbar-brand" href="#">
        TotalCloud
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse flex-grow-0" id="navbarNavDropdown">
        <ul class="navbar-nav  ml-auto ">
          <li class="nav-item " style={{ paddingLeft: 600 }}>
            <NavLink to="/home" className="nav-link">
              Home
            </NavLink>
          </li>
          <li class="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Features
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Pricing
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              ScreenShots
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
