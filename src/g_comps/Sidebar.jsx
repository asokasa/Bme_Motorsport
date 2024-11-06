import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button onClick={toggleSidebar} className="sidebar-toggle">
                {isOpen ? (
                    // Close (X) SVG icon
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                ) : (
                    // Hamburger (menu) SVG icon
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                )}
            </button>
            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                <nav>
                    <ul>
                        <li><NavLink to="/" end className={({ isActive }) => isActive ? 'active' : undefined} onClick={toggleSidebar}>Home</NavLink></li>
                        <li><NavLink to="/tamogatoink" className={({ isActive }) => isActive ? 'active' : undefined} onClick={toggleSidebar}>Támogatóink</NavLink></li>
                        <li><NavLink to="/hirek" className={({ isActive }) => isActive ? 'active' : undefined} onClick={toggleSidebar}>Hírek</NavLink></li>
                        <li><NavLink to="/formula_student" className={({ isActive }) => isActive ? 'active' : undefined} onClick={toggleSidebar}>Formula Student</NavLink></li>
                        <li><NavLink to="/csapattagok" className={({ isActive }) => isActive ? 'active' : undefined} onClick={toggleSidebar}>Csapattagok</NavLink></li>
                        <li><NavLink to="/galeria" className={({ isActive }) => isActive ? 'active' : undefined} onClick={toggleSidebar}>Galéria</NavLink></li>
                        <li><NavLink to="/kapcsolatok" className={({ isActive }) => isActive ? 'active' : undefined} onClick={toggleSidebar}>Kapcsolatok</NavLink></li>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default Sidebar;
