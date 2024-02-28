import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import User from './pages/UserRegistrationForm.jsx';
import Professional from './pages/ProfessionalRegistrationForm.jsx';
import UserHome from './pages/UserHome.jsx';
import Search from './pages/Search.jsx';
import ProfessionalHome from './pages/ProfessionalHome.jsx';
import PerfilProf from './pages/PerfilProf.jsx';
import AgregarTurno from './pages/AgregarTurno.jsx';
import CheckOut from './components/CheckOut.jsx';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ingresar" element={<Login />} />
          <Route path="/nuevo-usuario" element={<User />} />
          <Route path="/nuevo-profesional" element={<Professional />} />
          <Route path="/usuario" element={<UserHome />} />
          <Route path="/profesional" element={<ProfessionalHome />} />
          <Route path='/agregar.turno' element={<AgregarTurno />} />
          <Route path="/search" element={<Search />} />
          <Route path="/perfilProf" element={<PerfilProf />} />
          <Route path='/check-out' element={<CheckOut />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;