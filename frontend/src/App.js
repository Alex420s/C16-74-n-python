import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import User from './pages/UserRegistrationForm.jsx';
import Professional from './pages/ProfessionalRegistrationForm.jsx';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/nuevo-usuario" element={<User />} />
          <Route path="/nuevo-profesional" element={<Professional />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;