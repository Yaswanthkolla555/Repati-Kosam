import express from "express";
import { addData } from "../controllers/AppointmentController.js";
import authMiddleware from "../middleware/auth.js";

const AppointmentRouter = express.Router();

AppointmentRouter.post("/add",authMiddleware ,addData);


export default AppointmentRouter;
