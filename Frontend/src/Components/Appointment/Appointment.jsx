import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Appointment.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const Appointment = () => {
    return (
        <>
            <div className="Appointment">
                <div className="row">
                    <div className="col-md-6 left"> 
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
                            <AppointmentForm />                    
                </div>
                <ToastContainer />
            </div>
        </>
    );
};

export default Appointment;
