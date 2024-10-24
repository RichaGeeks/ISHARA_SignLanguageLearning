import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import isharaModel from './models/ishara.js';
const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/isharaSLS")

app.post("/login",(req,res)=>{
    const {email,password} =req.body;
    isharaModel.findOne({email:email})
    .then(user =>{
       if(user) {
           if(user.password === password){
             res.json("Success")
           } else {
             res.json("The Password is Incorrect")
           }
       } else {
          res.json("No record exists")
       }
    })
})
app.post('/signup',(req,res)=>{
    isharaModel.create(req.body)
    .then(ishara => res.json(ishara))
    .catch(err => res.json(err))


})

app.listen(5000,()=>{
    console.log("server is starting");
})