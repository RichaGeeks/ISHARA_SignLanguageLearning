import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import './signup.css';
import Nav from '../src/nav.jsx'
import Footer from '../src/footer.jsx'


function Signup() {
    

    const [email,setEmail]=useState('')
    const [name,setName]=useState('')
    const [password,setPassword]=useState('')
    const navigate =useNavigate()
    

    const handleSubmit= (e)=>{
        e.preventDefault();
        axios.post("http://localhost:5000/signup",{name,email,password})
        .then(result => {console.log(result)
        navigate('/login')
        })
        .catch(err=>console.log(err))

    }


    return (
       <div className="login">

            

            <form onSubmit={handleSubmit}>
                <h3>Signup</h3>
                <div>
                   <label htmlFor="email">
                     <h5>Name </h5>
                   </label>
                   <input 
                   type="text" 
                   placeholder="Enter Name"
                   autoComplete="off"
                   name="email"
                   onChange={(e)=> setName(e.target.value)}
                   />
                </div>
                <div>
                   <label htmlFor="email">
                     <h5>Email </h5>
                   </label>
                   <input 
                   type="email" 
                   placeholder="Enter Email eg. yourname@gmail.com"
                   autoComplete="off"
                   name="email"
                   onChange={(e)=> setEmail(e.target.value)}
                   />
                </div>
                <div>
                   <label htmlFor="email">
                     <h5>Password</h5>
                   </label>
                   <input 
                   type="password" 
                   placeholder="Enter Password"
                   autoComplete="off"
                   name="password"
                   onChange={(e)=> setPassword(e.target.value)}
                   />
                </div>
                <button type="submit">Sign up</button>
                <p>OR</p>
                <br />
                <p>Already have an account? </p>
                <button><Link to="/login">Login Page</Link></button>

            </form>

            <br />
            <p>OR</p>
            <br />
            <p>Already have an account? </p>

            <button><Link to="/">Login Page</Link></button>

        </div>
    )
}

export default Signup;