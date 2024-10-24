import React, { useEffect, useState } from "react"
import axios from "axios";
import './login.css';
import Nav from '../src/nav.jsx'
import Footer from '../src/footer.jsx'
import { useNavigate, Link } from "react-router-dom"


function Login() {

 
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const navigate =useNavigate()

    const handleSubmit=(e) =>{
        e.preventDefault();
        axios.post("http://localhost:5000/login",{email,password})
        .then(result => {
            console.log(result)
            if(result.data=="Success"){
                navigate('/')

            }
        
        })
        .catch(err=>console.log(err))


    }


    return (
        <div className="login">

            

            <form onSubmit= {handleSubmit}>
                <div>
                   <h2>Login</h2>
                   <label htmlFor="email">
                     <h5>Email </h5>
                   </label>
                   <input 
                   type="email" 
                   placeholder="Enter Email eg. yourname@gmail.com"
                   autoComplete="off"
                   name="email"
                   onChange={(e) => setEmail(e.target.value)}
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
                   onChange={(e) => setPassword(e.target.value)}
                   />
                </div>
                
                <button type="submit">Log In </button>
                <br />
                <p>OR</p>
                <br />
                <p>Don't have an account? Create one.</p>

                <Link to="/signup">Signup Page</Link>

            </form>

            

        </div>
    )
}

export default Login;




