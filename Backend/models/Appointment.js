import mongoose from "mongoose";
import plm from "passport-local-mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/REPATIKOSAM");

const appointmentSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    service: {
        type: String,
        required: true
    },
    doctor: {
        type: String,
        required: true
    },
    appointmentDate: {
        type: Date,
        required: true
    },
    appointmentTime: {
        type: String,
        required: true
    },
    patientName: {
        type: String,
        required: true
    },
    mobileNumber: {
        type: String,
        required: true,
    },
});

appointmentSchema.plugin(plm);
const appointmentModel = mongoose.models.appointment || mongoose.model("appointment", appointmentSchema);
export default appointmentModel;
