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
import Course1 from '../src/course1.jsx';
import Login from '../src/login.jsx';
import Signup from '../src/signup.jsx';
import Admin from '../src/admin.jsx';
import DonationPage from '../src/donationpage.jsx'
import { Link } from 'react-router-dom';
import Course2 from '../src/course2.jsx';
import ComingSoon from '../src/comingsoon.jsx';

function App() {
  console.log("App component rendered");

  const coursesRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToCourses = () => {
    if (coursesRef.current) {
      coursesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-container">
     
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div>
                <img alt="bg" className="bgimg" src={bg} />
                <Nav scrollToContact={scrollToContact} />
                <div className="TextMain">
                  <div>
                    <h1 className="toptext">
                      Bridging Communication,<br /> One Sign at a Time
                    </h1>
                    <h3 className="TextMainSub">
                      Gateway to mastering ASL, blending fun lessons with visual demos to make learning signs easy and exciting.
                      Unlock the power of hands and start communicating in a whole new way!
                    </h3>
                    <button className="gtcbtn" onClick={scrollToCourses}>
                      Go to Courses
                    </button>
                  </div>
                </div>
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
                      <div className="dnbtn"><Link to="/donationpage">Donate Now </Link></div>
                    </div>
                    <div>
                      <img src={donatepng} alt="donation img" />
                    </div>
                  </div>
                </div>
                <div ref={contactRef}>
                  <Contact />
                </div>
                <Footer />
              </div>
            </>
          }
        />
        <Route path="/translate" element={<Translate />} />
        <Route path="/about" element={<About />} />
        <Route path="/course1" element={<Course1 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/donationpage" element={<DonationPage />} />
        <Route path="/course2" element={<Course2 />} />
        <Route path="/comingsoon" element={<ComingSoon />} />

      </Routes>
    </div>
  );
}

export default App;
