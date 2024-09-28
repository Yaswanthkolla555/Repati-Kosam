import React from "react";
import "./Doctor.css";

const SimpleDoctor = () => {
  const appointments = [
    { name: "John Doe", service: "ENT Checkup", phone: "+91 1234567890", date: "Feb 14, 2024 9:05 a.m.", doctor: "Dr. Chaitanya" },
    { name: "Jane Smith", service: "General Checkup", phone: "+91 9876543210", date: "Feb 14, 2024 10:15 a.m.", doctor: "Dr. Kumar" },
    { name: "Alice Johnson", service: "Dental Checkup", phone: "+91 5555555555", date: "Feb 14, 2024 11:00 a.m.", doctor: "Dr. Sharma" },
    { name: "Bob Brown", service: "Cardiology Checkup", phone: "+91 6666666666", date: "Feb 14, 2024 11:30 a.m.", doctor: "Dr. Mehta" },
    { name: "Charlie Black", service: "Pediatric Checkup", phone: "+91 7777777777", date: "Feb 14, 2024 12:00 p.m.", doctor: "Dr. Gupta" },
    { name: "Daisy White", service: "Skin Consultation", phone: "+91 8888888888", date: "Feb 14, 2024 12:30 p.m.", doctor: "Dr. Singh" },
  ];

  return (
    <div className="simple-doctor">
      <div className="div">
        <div className="text-wrapper-7">8th September, 2024</div>
        <div className="text-wrapper-8">04:14 p.m.</div>
        <div className="text-wrapper-9">Good Evening Doc,</div>
        <div className="text-wrapper-10">Today’s Patients</div>
        <div className="overlap">
          <div className="overlap-2">
            {appointments.map((appointment, index) => (
              <div className="overlap-3" key={index}>
                <div className="rectangle" />
                <div className="text-wrapper-2">{appointment.name}</div>
                <div className="text-wrapper-3">Service: {appointment.service}</div>
                <div className="text-wrapper-4">{appointment.phone}</div>
                <p className="appointment-booked">
                  <span className="span">Appointment Booked On: </span>
                  <span className="text-wrapper-5">{appointment.date}</span>
                </p>
                <div className="text-wrapper-6">Doctor: {appointment.doctor}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleDoctor;
