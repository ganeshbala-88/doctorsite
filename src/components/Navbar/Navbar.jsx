import React from 'react';
import { Link } from 'react-router-dom'; 
import logo from '../../assets/logo.jpg';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="header">
      <img src={logo} alt="logo" className="logo" />

      <nav className="navbar" aria-label="Main Navigation">
        <ul className="items">
          <li>
            <Link to="/" aria-label="Home page">
              Home
            </Link>
          </li>
          <li>
            <Link to="/service" aria-label="Services page">
              Service
            </Link>
          </li>
          <li>
            <Link to="/doctors" aria-label="Find a doctor page">
              Find a Doctor
            </Link>
          </li>
          <li>
            <Link to="/contact" aria-label="Contact page">
              Contact
            </Link>
          </li>
        </ul>
        <div className="login-container">
          
           <Link to="/login"><button className="loginbtn" aria-label="Login"> Login</button></Link>
          
        </div>
      </nav>
    </header>
  );
};

export default Navbar;