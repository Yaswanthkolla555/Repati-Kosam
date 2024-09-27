import express from "express"
import cors from "cors"
import expressSession from "express-session"
// import "dotenv/config"
import passpor from "passport";
import passport from "passport";
import userRouter from "./routes/userRoute.js";

import dotenv from 'dotenv';
dotenv.config();


const app=express();
const port=4000;


// middleware
 app.use(express.json());
 app.use(cors({
    origin:"http://localhost:5173",
 }))

 app.use(expressSession({
   resave: false,
   saveUninitialized: false,
   secret: "Anything",
   cookie: { secure: false }
 }));

//  passport initialization
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser((user,done)=>{
   done(null,user.id)// Save user.id to the session
})
passport.deserializeUser((id, done) => {
   User.findById(id, (err, user) => {
     done(err, user); // Retrieve user object from the database based on user.id stored in session
   });
 });


 app.use("/api/user",userRouter)

 app.get("/",(req,res)=>{
    res.send("Hello World")
 })

 app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`); 
 })