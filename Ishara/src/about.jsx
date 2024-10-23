import './about.css';
import aboutus from '../src/images/aboutus.png'
import Nav from '../src/nav.jsx';

function About() {
  return (
	  <>
        <Nav/>
        <div class="about-section">
      
            <div class="about-container">
                <div class="image-section">
                    <img src={aboutus} alt="Person Image" class="profile-image"></img>
                </div>
                <div class="text-section">
                    <h2>About Us</h2>
                    <p>
                      Ishara is an interactive platform designed to make learning American Sign Language (ASL) simple, fun, and accessible for everyone. Inspired by the need for greater inclusivity, we offer structured courses that take users from basic to advanced levels, with a focus on practical communication skills. Whether you're learning to connect with the Deaf community or just exploring a new language, Ishara is here to guide you step by step with engaging lessons and helpful visual aids. Join us in breaking down communication 
                      barriers and fostering a more inclusive world!
                    </p>
                    <a href="#" class="learn-more-button">LEARN MORE</a>
                </div>
            </div>

            <div class="info-boxes">
                <div class="info-box">
                  <div class="info-box1">
                    <h3 class="numA">01</h3>
                    <h4>Our Vision</h4>
                    <p>
                      Our mission is to make learning ASL accessible and engaging for everyone, bridging communication gaps and fostering 
                      inclusivity through easy-to-follow lessons and interactive tools.
                    </p>
                  </div>
                </div>

                <div class="info-box">
                  <div class="info-box2">
                    <h3 class="numB">02</h3>
                    <h4>Our Values</h4>
                    <p>
                      We believe in inclusivity, accessibility, and empowerment. Our platform is built to support diverse learners, promoting understanding and respect for the Deaf 
                      community while encouraging personal growth.
                    </p>
                  </div>
                </div>

                <div class="info-box">
                  <div class="info-box3">
                    <h3 class="numC">03</h3>
                    <h4>Our Mission</h4>
                    <p>
                        We envision a world where language is no barrier to connection, and where ASL is a widely embraced tool for communication, inclusion, and 
                        cultural understanding across all communities.
                    </p>
                  </div>
                </div>
            </div>
        </div>
	  </>
  )
}

export default About;