import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './g_comps/My_Header';
import HomePage from './pages/HomePage';
import Kapcsolatok from './pages/Kapcsolatok';
import Tamogatoink from './pages/Tamogatoink';
import Csapattagok from './pages/Csapattagok';
import Hirek from './pages/Hirek';
import Galeria from './pages/Galeria';
import Formula_Student from './pages/Formula_Student';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app-layout">
        <Header />
        <main className="content-area">

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/kapcsolatok" element={<Kapcsolatok />} />
            <Route path="/tamogatoink" element={<Tamogatoink />} />
            <Route path="/csapattagok" element={<Csapattagok />} />
            <Route path="/hirek" element={<Hirek />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/formula_student" element={<Formula_Student />} />
            <Route path="*" element={<h2>404 - Not Found</h2>} /> {/* Fallback for undefined routes */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;