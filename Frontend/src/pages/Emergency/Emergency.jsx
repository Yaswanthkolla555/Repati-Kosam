import React from 'react'
import "./Emergency.css"
import Header from '../../Components/Header/Header.jsx'
import AboutUs from '../../Components/AboutUs/AboutUs.jsx'
import Appointment from '../../Components/Appointment/Appointment.jsx'
import BestDoc from "../../Components/BestDoc/BestDoc.jsx"
const Emergency = () => {
  return (
    <div>
      
        <div className="emergency">
            <h1>In case of Emergency</h1>
            <h7>Call these Numbers</h7>
            <h3>Ambulance service-<span>108068</span> </h3>
            <h3>Hospital Services-<span>108069</span></h3>
            <h3>Our Locations</h3>
            <h5>1.Cyberabab-<span>+91 1033 2348</span></h5>
            <h5>2.Madhapur-<span>+91 1033 2449</span></h5>
            <h5>3.Gachibowli-<span>+91 1033 2340</span></h5>
            <h5>4.Himayatnagar-<span>+91 1033 2730</span></h5>
        </div>


      <AboutUs/>
      <Appointment/>
      <BestDoc/>
    </div>
  )
}

export default Emergency
