import './App.css';
import bg from '../src/images/landingbg.png';
import donatepng from '../src/images/donation.png'
import Courses from '../src/courses.jsx';
import Footer from '../src/footer.jsx';
import Feedback from '../src/feedback.jsx';
import Nav from '../src/nav.jsx';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Translate from '../src/translate.jsx';
import About from '../src/about.jsx';  
import Contact from '../src/contact.jsx';  
import Login from '../src/login.jsx';  

function App() {
  return (
    <div className="app-container">
      
      {/*<Nav /> */ }
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <div>
                <img alt="bg" className="bgimg" src={bg} />
                <Nav />
                <div className="TextMain">
                  <div>
                    <h1 className="toptext">Bridging Communication,<br /> One Sign at a Time</h1>
                    <h3 className="TextMainSub">
                      Gateway to mastering ASL, blending fun lessons with visual demos to make learning signs easy and exciting.
                      Unlock the power of hands and start communicating in a whole new way!
                    </h3>
                    <button className="gtcbtn">Go to Courses</button>
                  </div>
                </div>
                <Courses />
                <Feedback />
                
                <div className="don">
                  <div className="dontcont">
                      <div className="textdon">
                           <h1>Donate Us</h1>
                           <p className="paradon">Your generous contribution enables us to make a significant difference in the lives of the deaf community. By supporting our cause, you help provide vital resources that improve access to quality education and innovative communication tools. These resources empower individuals to overcome communication barriers, enhance their learning opportunities, and build a more inclusive society where everyone has the chance to thrive.</p>
                           <div className="dnbtn"n>Donate Now</div>

                      </div>
                      <div>
                           <img src={donatepng} alt="donation img"></img>
                      </div>
                  </div>
                </div>
               
              </div>
            </>
          } 
        />
        
        <Route path="/translate" element={<Translate />} />
       
        <Route path="/about" element={<About />} />
        
        {/* Route for the Contact page */}
        <Route path="/contact" element={<Contact />} />
        
        {/* Route for the Login page */}
        <Route path="/login" element={<Login />} />
      </Routes>

      {/* Keep the Footer visible on every page */}
      <Footer />
    </div>
  );
}

export default App;
