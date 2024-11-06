import React from 'react';
import Sidebar from './Sidebar'; // Adjust the path if necessary
import './My_Header.css'; // Optional: create a CSS file for styling the header
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img src="/assets/logo.png" alt="logo" />
      </Link>
      <Sidebar />
    </header>
  );
};

export default Header;