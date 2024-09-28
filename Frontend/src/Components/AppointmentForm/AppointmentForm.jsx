import React, { useState, useEffect, useContext } from 'react';
import './AppointmentForm.css';
import { StoreContext } from '../../context/StoreContext';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    service: '',
    doctor: '',
    appointmentDate: '',
    appointmentTime: '',
    patientName: '',
    mobileNumber: '',
    username: 'sam', 
  });
  const [errors, setErrors] = useState({});
  const [minDate, setMinDate] = useState('');

  const { url } = useContext(StoreContext);
  const token = localStorage.getItem('token'); 

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setMinDate(today);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validatePhoneNumber = (number) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(number);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    let formErrors = {};

    if (!validatePhoneNumber(formData.mobileNumber)) {
      formErrors.mobileNumber = 'Invalid phone number. Must be 10 digits.';
    }
  

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    } else {
      setErrors({});
    }
  
    const new_url = `${url}/api/appointment/add`;
  
    try {
   
      const appointmentData = {
        ...formData,
        appointmentDate: new Date(formData.appointmentDate).toISOString(),
      };
  

      const response = await axios.post(new_url, appointmentData, {
        headers: {
          token: token, 
        },
      });
  
    
      if (response.data.success) {
        toast.success("Appointment added successfully!"); 
        
        setFormData({
          service: '',
          doctor: '',
          appointmentDate: '',
          appointmentTime: '',
          patientName: '',
          mobileNumber: '',
          username: 'sam', 
        });
      } else {
       
        toast.error(response.data.message);
      }
    } catch (error) {
      
      console.error("Error during Appointment", error);
      toast.error(error.response?.data?.message || "An error occurred. Please try again."); 
    }
  };
  
  return (
    <div className="reservation-container">
      <h3 className="reservation-header">Appointment</h3>
      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="booking-form-left">
          <div className="selection-fields">
            <select name="service" value={formData.service} onChange={handleChange} required>
              <option value="" disabled>Select Service</option>
              <option value="General">General</option>
              <option value="Special">Special</option>
            </select>
            <select name="doctor" value={formData.doctor} onChange={handleChange} required>
              <option value="" disabled>Select Doctor</option>
              <option value="Doctor1">Doctor 1</option>
              <option value="Doctor2">Doctor 2</option>
            </select>
          </div>

          <div className="selection-fields">
            <input
              type="date"
              name="appointmentDate"
              min={minDate}
              value={formData.appointmentDate}
              onChange={handleChange}
              required
            />
            <input
              type="time"
              name="appointmentTime"
              value={formData.appointmentTime}
              onChange={handleChange}
              required
            />
          </div>

          <input
            type="text"
            name="patientName"
            value={formData.patientName}
            onChange={handleChange}
            placeholder="Patient Name"
            required
          />
          <input
            type="tel"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            placeholder="Mobile Number"
            required
          />

          {Object.keys(errors).length > 0 && (
            <div className="error-container">
              {Object.values(errors).map((error, index) => (
                <p key={index} className="error-text">
                  {error}
                </p>
              ))}
            </div>
          )}
        </div>
        <button className="submit-button" type="submit">Make Appointment</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AppointmentForm;
