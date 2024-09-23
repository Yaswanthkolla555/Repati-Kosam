import React from 'react'
import { Route, Routes } from "react-router-dom"
import Navbar from './Components/Navbar/Navbar.jsx'
import Header from './Components/Header/Header.jsx'
import AboutUs from './Components/AboutUs/AboutUs.jsx'
import Error from './Components/Error/Error.jsx'
import Appointment from './Components/Appointment/Appointment.jsx'
import BestDoc from "./Components/BestDoc/BestDoc.jsx"
import Footer from './Components/Footer/Footer.jsx'
const App = () => {
  return (
    <>
      <Navbar />
      <Header/>
      <AboutUs/>
      <Appointment/>
      <BestDoc/>
      <Footer/>
    </>
  )
}

export default App
