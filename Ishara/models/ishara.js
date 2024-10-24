import mongoose from "mongoose";

const isharaSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const isharaModel = mongoose.model("ishara",isharaSchema)

export default isharaModel;

