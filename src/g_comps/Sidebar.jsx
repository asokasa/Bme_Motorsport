import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';

const Sidebar = ({ isOpen, toggleSidebar }) => {
    return (
        <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
            <nav>
                <ul>
                    <li><NavLink to="/" end className={({ isActive }) => isActive ? styles.active : ''} onClick={toggleSidebar}>Home</NavLink></li>
                    <li><NavLink to="/tamogatoink" className={({ isActive }) => isActive ? styles.active : ''} onClick={toggleSidebar}>Támogatóink</NavLink></li>
                    <li><NavLink to="/hirek" className={({ isActive }) => isActive ? styles.active : ''} onClick={toggleSidebar}>Hírek</NavLink></li>
                    <li><NavLink to="/formula_student" className={({ isActive }) => isActive ? styles.active : ''} onClick={toggleSidebar}>Formula Student</NavLink></li>
                    <li><NavLink to="/csapattagok" className={({ isActive }) => isActive ? styles.active : ''} onClick={toggleSidebar}>Csapattagok</NavLink></li>
                    <li><NavLink to="/galeria" className={({ isActive }) => isActive ? styles.active : ''} onClick={toggleSidebar}>Galéria</NavLink></li>
                    <li><NavLink to="/kapcsolatok" className={({ isActive }) => isActive ? styles.active : ''} onClick={toggleSidebar}>Kapcsolatok</NavLink></li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
