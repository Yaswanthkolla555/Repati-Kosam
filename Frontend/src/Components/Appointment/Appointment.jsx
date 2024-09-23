import React from 'react'
import "./Appointment.css"
const Appointment = () => {
    return (
        <>
            <div className="Appointment">
                <div className="left">
                    <div className="top">
                        <h3>Why Us?</h3>
                        <div className="iconswhite">
                            <div className="icon_1"><span><img src="Tick_iconWhite.png" alt="" /></span> Easy</div>
                            <div className="icon_1"><span><img src="Tick_iconWhite.png" alt="" /></span> Quick</div>
                            <div className="icon_1"><span><img src="Tick_iconWhite.png" alt="" /></span> User-friendly</div>
                            <div className="icon_1"><span><img src="Tick_iconWhite.png" alt="" /></span> Zero-waiting Time</div>
                        </div>
                    </div>

                    <div className="bottom">
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
        </>
    )
}

export default Appointment
