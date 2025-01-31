import React from 'react';

import Sidebar from './Sidebar'; // Adjust the path if necessary
import styles from './My_Header.module.css'; // Optional: create a CSS file for styling the header
import { Link } from 'react-router-dom';


const Header = () => {

  




  return (
    <div className={styles.header}>
      <Link to="/">
        <img src="/assets/Feher_logo__nagy.png" alt="logo" />
      </Link>
      <Sidebar />
    </div>
  );
};

export default Header; 