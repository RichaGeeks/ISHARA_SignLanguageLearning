import './login.css';
import Nav from '../src/nav.jsx'
import Footer from '../src/footer.jsx'
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className="helllo">
            <div className="btnslogin">
                <div className="btnbacklogin"><h2><Link to="/">Back</Link></h2></div>
                <div className="btnbacklogin"><h2><Link to="/signup">Sign Up</Link></h2></div>
            </div>
            <div className="loginbggg">
                
                
                <div class="backgroundlogin">
                  
                  <div class="shape"></div>
                  <div class="shape"></div>
                </div>
                <form>
                  <h3>Login Here</h3>

                    <label for="username">Username</label>
                    <input type="email" onChange={(e)=> {setEmail(e.target.value)} } placeholder="Email or Phone" id="username"></input>

                    <label for="password">Password</label>
                    <input type="password"onChange={(e)=> {setEmail(e.target.value)}}  placeholder="Password" id="password"></input>

                    <button>Log In</button>
            
                </form>
                
            </div>
            <div>
                    <br/>
                    <p>OR</p>
                    <br/>
                    <Link to="/signin"><h3>Sign Up</h3></Link>
            </div>
         
           
        </div>
    );
}

export default Login;
