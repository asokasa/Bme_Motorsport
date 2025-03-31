import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [show, setShow] = useState(true);
  const lastScrollY = useRef(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      // Hide navbar on scroll down past 50px, show on scroll up
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setShow(false);
      } else {
        setShow(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${show ? 'navbar--visible' : 'navbar--hidden'}`}>
      <div className="navbar__content">
        <div className="navbar__left">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
            Home
          </NavLink>
          <NavLink to="/tamogatoink" className={({ isActive }) => (isActive ? 'active' : '')}>
            Támogatóink
          </NavLink>
          <NavLink to="/hirek" className={({ isActive }) => (isActive ? 'active' : '')}>
            Hírek
          </NavLink>
        </div>
        <div className="navbar__center">
          <Link to="/">
            <img src="/assets/Feher_logo__nagy.png" alt="logo" className="navbar__logo" />
          </Link>
        </div>
        <div className="navbar__right">
          <NavLink to="/formula_student" className={({ isActive }) => (isActive ? 'active' : '')}>
            Formula Student
          </NavLink>
          <NavLink to="/csapattagok" className={({ isActive }) => (isActive ? 'active' : '')}>
            Csapattagok
          </NavLink>
          <NavLink to="/galeria" className={({ isActive }) => (isActive ? 'active' : '')}>
            Galéria
          </NavLink>
          <NavLink to="/kapcsolatok" className={({ isActive }) => (isActive ? 'active' : '')}>
            Kapcsolatok
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
