import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        // Scrolling up → show navbar
        setShow(true);
      } else {
        // Scrolling down → hide navbar
        setShow(false);
      }

      setLastScrollY(currentScrollY); // Update last scroll position
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]); // Depend on lastScrollY so it updates correctly

  return (
    <>
      {/* Sidebar - Now opens from the right */}
      <div className={`sidebar ${sidebarOpen ? 'sidebar--open' : ''}`}>
        <button className="close-btn" onClick={() => setSidebarOpen(false)}>✖</button>
        <NavLink to="/" onClick={() => setSidebarOpen(false)}>Home</NavLink>
        <NavLink to="/tamogatoink" onClick={() => setSidebarOpen(false)}>Támogatóink</NavLink>
        <NavLink to="/hirek" onClick={() => setSidebarOpen(false)}>Hírek</NavLink>
        <NavLink to="/formula_student" onClick={() => setSidebarOpen(false)}>Formula Student</NavLink>
        <NavLink to="/csapattagok" onClick={() => setSidebarOpen(false)}>Csapattagok</NavLink>
        <NavLink to="/galeria" onClick={() => setSidebarOpen(false)}>Galéria</NavLink>
        <NavLink to="/kapcsolatok" onClick={() => setSidebarOpen(false)}>Kapcsolatok</NavLink>
      </div>

      {/* Navbar - Reappears on scroll up */}
      <header className={`navbar ${show ? 'navbar--visible' : 'navbar--hidden'}`}>
        <div className="navbar__content">
          {/* Sidebar Toggle Button - Now on the right */}
          <button className="sidebar-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
            ☰
          </button>

          <div className="navbar__center">
            <Link to="/">
              <img src="/assets/Feher_logo__nagy.png" alt="logo" className="navbar__logo" />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
