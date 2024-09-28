import React, { useState, useContext } from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar.jsx';
import Home from './pages/Home/Home.jsx';
import Footer from './Components/Footer/Footer.jsx';
import LoginPage from './Components/LoginPage/LoginPage.jsx';
import Patient from './pages/Patient/Patient.jsx';
import Emergency from './pages/Emergency/Emergency.jsx';
import { StoreContext } from '../src/context/StoreContext.jsx';
import  SimpleDoctor  from './pages/Doctor/Doctor.jsx';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const { token } = useContext(StoreContext);
  console.log(token);

  return (
    <>
      {showLogin && <LoginPage setShowLogin={setShowLogin} />}
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path='/' element={!token ? <Home /> : <Navigate to="/User" />} />
        <Route path='/User' element={token ? <Patient /> : <Navigate to="/" />} />
        <Route path="/Emergency" element={<Emergency />} />
        <Route path="/Doctor" element={<SimpleDoctor />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
