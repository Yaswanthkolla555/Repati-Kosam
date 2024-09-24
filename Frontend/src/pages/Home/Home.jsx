import React from 'react'
import "./Home.css"
import Header from '../../Components/Header/Header.jsx'
import AboutUs from '../../Components/AboutUs/AboutUs.jsx'
import Appointment from '../../Components/Appointment/Appointment.jsx'
import BestDoc from "../../Components/BestDoc/BestDoc.jsx"

const Home = () => {
  return (
    <div>
      <Header/>
      <AboutUs/>
      <Appointment/>
      <BestDoc/>     
    </div>
  )
}

export default Home
