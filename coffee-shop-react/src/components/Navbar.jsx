import React, { useState } from 'react';
import { Link } from 'react-router-dom';



function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
          <i className="fa fa-coffee fa-2x" />  COFFEE_DOM 
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fa fa-times' : 'fa fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}></ul>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>Home</Link>
            </li>
            <li className="nav-item">
            <Link to="/services" className="nav-links" onClick={closeMobileMenu}>Services</Link>
          </li>
          <li className="nav-item">
          <Link to="/products" className="nav-links" onClick={closeMobileMenu}>Product</Link>
        </li>
        <li className="nav-item">
        <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>Sign Up</Link>
      </li>
        </div>
      </nav>
    </>
  )
}

export default Navbar
