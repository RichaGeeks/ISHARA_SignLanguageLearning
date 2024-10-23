import './App.css';
import bg from '../src/images/landingbg.png';
import donatepng from '../src/images/donation.png';
import Courses from '../src/courses.jsx';
import Footer from '../src/footer.jsx';
import Feedback from '../src/feedback.jsx';
import Nav from '../src/nav.jsx';
import React, { useRef } from 'react';

import { Route, Routes } from 'react-router-dom';
import Translate from '../src/translate.jsx';
import About from '../src/about.jsx';
import Contact from '../src/contact.jsx';
import Login from '../src/login.jsx';
import Course1 from '../src/course1.jsx';
import Signup from '../src/signup.jsx';

function App() {
  // Create a reference for the Courses section
  const coursesRef = useRef(null);

  // Function to scroll to the Courses section
  const scrollToCourses = () => {
    if (coursesRef.current) {
      coursesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-container">
      {/* <Nav /> */}
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
                    {/* Modify the button to trigger scroll to Courses */}
                    <button className="gtcbtn" onClick={scrollToCourses}>
                      Go to Courses
                    </button>
                  </div>
                </div>
                {/* Use the ref in the Courses component */}
                <div ref={coursesRef}>
                  <Courses />
                </div>
                <Feedback />
                
                <div className="don">
                  <div className="dontcont">
                      <div className="textdon">
                           <h1>Donate Us</h1>
                           <p className="paradon">
                             Your generous contribution enables us to make a significant difference in the lives of the deaf community. By supporting our cause, you help provide vital resources that improve access to quality education and innovative communication tools. These resources empower individuals to overcome communication barriers, enhance their learning opportunities, and build a more inclusive society where everyone has the chance to thrive.
                           </p>
                           <div className="dnbtn">Donate Now</div>
                      </div>
                      <div>
                           <img src={donatepng} alt="donation img"></img>
                      </div>
                  </div>
                </div>
                <Contact />
                <Footer />
              </div>
            </>
          }
        />
        
        <Route path="/translate" element={<Translate />} />
        <Route path="/about" element={<About />} />
        <Route path="/course1" element={<Course1 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </div>
  );
}

export default App;
