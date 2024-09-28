import appointmentModel from "../models/Appointment.js";

const addData = async (req, res) => {
    try {
        const username = req.body.username; 
        const userId = req.body.userId; 

        // Check if username is provided
        if (!username) {
            return res.status(400).json({ success: false, message: "Username is required." });
        }

        const appointmentData = {
            service: req.body.service,
            doctor: req.body.doctor,
            appointmentDate: req.body.appointmentDate,
            appointmentTime: req.body.appointmentTime,
            patientName: req.body.patientName,
            mobileNumber: req.body.mobileNumber,
            username: username, 
            userId: userId,
        };

        // Create a new appointment
        const newAppointment = await appointmentModel.create(appointmentData);

        res.status(201).json({ success: true, appointment: newAppointment });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Error creating appointment" });
    }
};

export { addData };
