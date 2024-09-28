import React, { useState } from 'react';
import "./Header.css";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  return (
    <>
      <div className="header" id='home'>
        <div className="frame">
          <img className="dashicons-arrow" src="/leftarrow.png" alt="left arrow" />
          <img className="dashicons-arrow" src="/rightarrow.png" alt="right arrow" />
        </div>
        <div className="buttons">
          <button className="appointment">Appointment</button>
          <button className="contactus">Contact Us</button>
        </div>
        <div className="box">  
          <div className="col1">              
            <div className="Heading">Opening Hours</div>
            <div className="days">
              <div className="left">Mon-Fri</div>
              <div className="right">8:00am - 9:00pm</div>
            </div>
            <div className="days">
              <div className="left">Saturday</div>
              <div className="right">8:00am - 5:00pm</div>
            </div>
            <div className="days">
              <div className="left">Sunday</div>
              <div className="right">8:00am - 7:00pm</div>
            </div>
            <button className="box1_buttons">Appointment</button>
          </div>  
          <div className="col2">
            <div className="Heading">Search A Doctor</div>
            <div className="appointment-date-picker">
              <button
                className="box1_buttons"
                onClick={() => setShowDatePicker(!showDatePicker)}
              >
                {selectedDate ? selectedDate.toLocaleDateString() : "Appointment Date"}
              </button>
              {showDatePicker && (
                <div className="datepicker-popup">
                  <DatePicker
                    selected={selectedDate}
                    onChange={(date) => {
                      setSelectedDate(date);
                      setShowDatePicker(false);
                    }}
                    inline
                  />
                </div>
              )}
            </div>
            <button className="box1_buttons">Condition</button>
            <button className="box1_buttons">Search Doctor</button>
          </div>  

          <div className="col3">
            <div className="Heading">Appointment via call</div>
            <p>If you find it intimidating through online appointment booking process, you can book your appointment by
              dialing:</p>
            <div className="Heading">+1800 343 45346</div>
          </div>  
        </div>
      </div>
    </>
  );
};

export default Header;
