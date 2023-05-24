import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Signal from '../assets/signal-svgrepo-com.svg';
import Mic from '../assets/mic-svgrepo-com.svg';
import Search from '../assets/search-svgrepo-com.svg';
import './Navbar.css';

const NavBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <button type="button" className="nav-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </button>
          <NavLink exact to="/" className="nav-logo">
            Air Visual
            <i className="fas fa-code" />
          </NavLink>
          <div className="mobile-icons">
            <img src={Signal} className="icon-mobile signal" alt="signal" />
            <img src={Mic} className="icon-mobile mic" alt="mic" />
            <img src={Search} className="icon-mobile search" alt="search" />
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/aboutme"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About Me
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/references"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                References
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
