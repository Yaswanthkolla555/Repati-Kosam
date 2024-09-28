import React, { useState, useEffect } from 'react';
import './AppointmentForm.css';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    service: '',
    doctor: '',
    appointmentDate: '',
    appointmentTime: '',
    patientName: '',
    mobileNumber: '',
    email: '',
    additionalNotes: '',
  });
  const [errors, setErrors] = useState({});
  const [minDate, setMinDate] = useState('');

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


  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};

    if (!validatePhoneNumber(formData.mobileNumber)) {
      formErrors.mobileNumber = 'Invalid phone number. Must be 10 digits.';
    }



    
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setErrors({});
      // Process formData here (e.g., send it to a server)
      console.log('Form data:', formData);
    }
  };

  return (
    <div className="reservation-container">
      <h3 className="reservation-header">Appointment</h3>
      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="booking-form-left">
          <div className="selection-fields">
            <select name="service" value={formData.service} onChange={handleChange}>
              <option value="" disabled>Select Service</option>
              <option value="General">General</option>
              <option value="Special">Special</option>
            </select>
            <select name="doctor" value={formData.doctor} onChange={handleChange}>
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
              placeholder="Appointment Date"
            />
            <input
              type="time"
              name="appointmentTime"
              value={formData.appointmentTime}
              onChange={handleChange}
              placeholder="Appointment Time"
            />
          </div>

          <input
            type="text"
            name="patientName"
            value={formData.patientName}
            onChange={handleChange}
            placeholder="Patient Name"
          />
          <input
            type="number"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            placeholder="Mobile Number"
          />

          {Object.keys(errors).length > 0 && (
            <div className="error-container">
              {Object.values(errors).map((error) => (
                <p key={error} className="error-text">
                  {error}
                </p>
              ))}
            </div>
          )}
        </div>
        <button className="submit-button">Make Appointment</button>
      </form>
    </div>
  );
};

export default AppointmentForm;