import './nav.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Nav({ scrollToContact }) {
  return (
    <nav>
      <h2>Ishara.</h2>
      <ul>
        <li className="navItems">
          <Link to="/">Home</Link>
        </li>
        <li className="navItems">
          <Link to="/about">About</Link>
        </li>
        <li className="navItemTrans">
          <Link to="/translate">Translate</Link>
        </li>
        <li className="navItems" onClick={scrollToContact}>        
            Contact
        </li>
        <li className="navItemLogin">
          <button className="loginbtn">
            <Link to="/login">LogIn/SignUp</Link>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
