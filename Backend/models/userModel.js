import mongoose from "mongoose"
import plm from "passport-local-mongoose"

mongoose.connect("mongodb://127.0.0.1:27017/REPATIKOSAM")

const userSchema=new mongoose.Schema({
    username: { 
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    secret:{
        type:String,
    },
})

userSchema.plugin(plm)
const userModel=mongoose.models.user || mongoose.model("user",userSchema);
export default userModel;