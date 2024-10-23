import './about.css';
import aboutus from '../src/images/aboutus.png';
import Nav from '../src/nav.jsx';
import Footer from '../src/footer.jsx';
import React, { useState } from 'react';

function About() {
  // State to manage whether additional text is visible
  const [showMore, setShowMore] = useState(false);

  // Toggle function to show or hide more text
  const handleToggle = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <Nav />
      <div className="about-section">
        <div className="about-container">
          <div className="image-section">
            <img src={aboutus} alt="About Us" className="profile-image"></img>
          </div>
          <div className="text-section">
            <h2>About Us</h2>
            <p>
              Ishara is an interactive platform designed to make learning American Sign Language (ASL) simple, fun, and accessible for everyone. Inspired by the need for greater inclusivity, we offer structured courses that take users from basic to advanced levels, with a focus on practical communication skills.
              <br />
              {showMore && (
                <span>
                  Whether you're learning to connect with the Deaf community or just exploring a new language, Ishara is here to guide you step by step with engaging lessons and helpful visual aids. Our platform fosters a supportive learning environment where users can practice and improve their ASL skills at their own pace. We also aim to spread awareness about Deaf culture, bridging the communication gap one sign at a time.
                  <br /><br />
                  With Ishara, you can expect a dynamic learning experience enriched with real-life examples, interactive quizzes, and progress tracking tools. Join us in breaking down communication barriers and fostering a more inclusive world!
                </span>
              )}
            </p>
            <a href="#" className="learn-more-button" onClick={handleToggle}>
              {showMore ? 'SHOW LESS' : 'LEARN MORE'}
            </a>
          </div>
        </div>

        <div className="info-boxes">
          <div className="info-box">
            <div className="info-box1">
              <h3 className="numA">01</h3>
              <h4>Our Vision</h4>
              <p>
                Our mission is to make learning ASL accessible and engaging for everyone, bridging communication gaps and fostering inclusivity through easy-to-follow lessons and interactive tools.
              </p>
            </div>
          </div>

          <div className="info-box">
            <div className="info-box2">
              <h3 className="numB">02</h3>
              <h4>Our Values</h4>
              <p>
                We believe in inclusivity, accessibility, and empowerment. Our platform is built to support diverse learners, promoting understanding and respect for the Deaf community while encouraging personal growth.
              </p>
            </div>
          </div>

          <div className="info-box">
            <div className="info-box3">
              <h3 className="numC">03</h3>
              <h4>Our Mission</h4>
              <p>
                We envision a world where language is no barrier to connection, and where ASL is a widely embraced tool for communication, inclusion, and cultural understanding across all communities.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
