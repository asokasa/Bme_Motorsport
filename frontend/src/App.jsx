import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './g_comps/Navbar';
import Footer from './g_comps/My_Footer';
import HomePage from './pages/HomePage';
import Kapcsolatok from './pages/Kapcsolatok';
import Tamogatoink from './pages/Tamogatoink';
import Csapattagok from './pages/Csapattagok';
import Hirek from './pages/Hirek';
import Galeria from './pages/Galeria';
import Formula_Student from './pages/Formula_Student';
import AdminDashboard from "./pages/AdminDashboard";
import AdminLogin from "./pages/AdminLogin";
import Alumni from "./pages/Alumni";


import './App.css';

function App() {
  return (
    <Router>
      
      <div className="app-layout">

        <Navbar />
        <main className="content-area">

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/kapcsolatok" element={<Kapcsolatok />} />
            <Route path="/tamogatoink" element={<Tamogatoink />} />
            <Route path="/csapattagok" element={<Csapattagok />} />
            <Route path="/hirek" element={<Hirek />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/formula_student" element={<Formula_Student />} />
            <Route path="/super-secret-admin" element={<AdminLogin />} />
            <Route path="/admin-panel" element={<AdminDashboard />} />
            <Route path="/alumni" element={<Alumni />} />
            
            <Route path="*" element={<h2>404 - Not Found</h2>} /> {/* Fallback*/}
          </Routes>



        </main>
        <Footer />

      </div>
      <div className="black"></div>
    </Router>
  );
}

export default App;