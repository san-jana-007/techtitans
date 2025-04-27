// src/components/Navbar.js
/*import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
  const location = useLocation();
  

  // Hide navbar on login/signup pages
  const hideOnPaths = ['/', '/signup'];
  if (hideOnPaths.includes(location.pathname)) return null;

  return (
    <nav className="navbar">
      <h2>Clothes Inventory</h2>
      <div className="nav-links">
        <Link to="/inventory">Inventory</Link>
        <Link to="/billing">Billing</Link>
      </div>
    </nav>
  );
};

export default Navbar;
*/

// src/components/Navbar.js
/*import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png'; // Make sure this path is correct

const Navbar = () => {
  const location = useLocation();
  const hideOnPaths = ['/', '/signup'];
  if (hideOnPaths.includes(location.pathname)) return null;

  return (
    <nav className="navbar">
      <Link to="/inventory" className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
        <h2>Clothes Inventory</h2>
      </Link>
      <div className="nav-links">
        <Link to="/inventory">Inventory</Link>
        <Link to="/billing">Billing</Link>
      </div>
    </nav>
  );
};

export default Navbar;
*/

//making improvemnts
import React from 'react';
import './Navbar.css';
import { FaSearch, FaPlus, FaBell, FaCog, FaTshirt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';




const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <FaTshirt className="logo-icon" />
        <h2 className="brand-name">ClothCart</h2>
      </div>

      <div className="navbar-search">
        <FaSearch />
        <input type="text" placeholder="Search for clothes..." />
        <kbd>⌘ K</kbd>
      </div>

      <div className="navbar-actions">
        <button className="add-btn"><FaPlus /> Add New</button>
        
        <MdEmail className="icon" />
        <FaBell className="icon" />
        <FaCog className="icon" />
        <img src="https://i.pravatar.cc/30" alt="user" className="user-avatar" />
      </div>
    </div>
  );
};

export default Navbar;


