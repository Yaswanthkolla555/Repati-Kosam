import React, { useState } from 'react'
import { Route, Routes } from "react-router-dom"
import Navbar from './Components/Navbar/Navbar.jsx'
import Home from './pages/Home/Home.jsx'
import Footer from './Components/Footer/Footer.jsx'
import LoginPage from './Components/LoginPage/LoginPage.jsx'
import Patient from './pages/Patient/Patient.jsx'
const App = () => {
  const [showLogin,setShowLogin]=useState(false)
  return (
    <>
    {showLogin?<LoginPage setShowLogin={setShowLogin}/>:<></>}
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/User' element={<Patient/>}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
