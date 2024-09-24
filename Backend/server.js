import express from "express"
import cors from "cors"
import expressSession from "express-session"
// import "dotenv/config"



const app=express();
const port=4000;


// middleware
 app.use(express.json());
 app.use(cors({
    origin:"http://localhost:5173",
 }))


 app.get("/",(req,res)=>{
    res.send("Hello World")
 })

 app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`); 
 })