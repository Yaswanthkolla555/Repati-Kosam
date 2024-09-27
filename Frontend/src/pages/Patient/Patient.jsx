import React from 'react'
import "./Patient.css"

const Patient = () => {
  return (
    <div>
      <div className="User-Appointment">
                <div className="User-left">
                    <div className="User-top">
                        <h3>Why Us?</h3>
                        <div className="User-iconswhite">
                            <div className="stats">
                                <h1 className="stats-top">A++</h1>
                                <h8 className="stats-bottom">IMC Accredited</h8>
                            </div>
                            <div className="stats">
                                <h1 className="stats-top">24/7</h1>
                                <h8 className="stats-bottom">Emergency Service</h8>
                            </div>
                            <div className="stats">
                                <h1 className="stats-top">90+</h1>
                                <h8 className="stats-bottom">Skilled Workforce</h8>
                            </div>
                        </div>
                    </div>

                    <div className="User-bottom">
                        <h3>Book an appointment</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo dolorem minus sequi repudiandae cum sit praesentium laboriosam sapiente nostrum voluptas?</p>
                    </div>
                </div>
                <div className="reservation-container">
                    <h3 className="reservation-header">Appointment</h3>
                    <form className="booking-form">
                        <div className="booking-form-left">
                            <div className="selection-fields">
                                <select name="Service">
                                    <option value="" disabled selected>Select Service</option>
                                    <option value="General">General</option>
                                    <option value="Hello">Hello</option>
                                </select>
                                <select name="Doctor">
                                    <option value="" disabled selected>Select Doctor</option>
                                    <option value="Doctor1">Doctor1</option>
                                    <option value="Hello">Hello</option>
                                </select>
                            </div>
                            <div className="selection-fields">
                                <input type="text" placeholder="Appointment Date" />
                                <input type="text" placeholder="Appointment Time" />
                            </div>
                            <input type="text" placeholder="Patient Name" />
                            <input type="number" placeholder="Mobile Number" />
                        </div>
                        <button className="submit-button">Make Appointment</button>
                    </form>
                </div>

        </div>
    <div className="Past-Prep">
        <div className="Past-prep-left">
            <div className="Past-prep-items">
                <div className="title">
                <h1>Past Precriptions</h1>
                <button>View More <span><img src="./PatientImgs/Vector.png" alt="" /></span></button>
                </div>
                <div className="items">
                        <div className="box">
                        <img src="./PatientImgs/prescription.png" alt="" />
                        </div>
                        <div className="box">
                        <img src="./PatientImgs/prescription.png" alt="" />
                        </div>
                        <div className="box">
                        <img src="./PatientImgs/prescription.png" alt="" />
                        </div>
                </div> 
            </div>
            <div className="Past-prep-items">
                <div className="title">
                    <h1>Medical test Reports</h1>
                    <button>View More<span><img src="./PatientImgs/Vector.png" alt="" /></span></button>
                </div>
                    <div className="items">
                            <div className="box">
                                <img src="./PatientImgs/prescription.png" alt="" />
                            </div>
                            <div className="box">
                            <img src="./PatientImgs/prescription.png" alt="" />
                            </div>
                            <div className="box">
                            <img src="./PatientImgs/prescription.png" alt="" />
                            </div>

                    </div>
            </div>
        </div>
        <div className="Past-prep-right">
            <div className="title">
                <h3>Missed Notifications</h3>                  
            </div>
            <ul>
                <li>Appoint confirmed on 27-04-24 for Ms. Jaanu. Be at the hospital before 11 a.m.  </li>
                <li>Payment of $600 successful, made on 26-04-24.</li>
                <li>New medical report (22.03.24_patient.pdf) sent by Vijaya Diagnostics Centre, Hyderabad.</li>
                <li>Account updated.</li>
            </ul>
        </div>
    </div>
    </div>
  )
}

export default Patient
