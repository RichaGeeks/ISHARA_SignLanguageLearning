import './courses.css'
import './course1.jsx'
import { Link } from 'react-router-dom';

function Courses() {

  return (
    <>
      <div class="main-content">
          <Link to="/course1">
              <div class="moleskine-wrapper">
                <div class="moleskine-notebook">
                  <div class="notebook-cover purple">
                    <div class="notebook-skin">Basics of ASL</div>
                  </div>
                  <div class="notebook-page"></div>
                </div>
              </div>
          </Link>
  
          <Link to="/course2">
              <div class="moleskine-wrapper">
                <div class="moleskine-notebook">
                  <div class="notebook-cover blue">
                    <div class="notebook-skin">Color and Shapes</div>
                  </div>
                  <div class="notebook-page ruled"></div>
       
                </div>
              </div>
          </Link >
  
          <Link to="/comingsoon">
              <div class="moleskine-wrapper">
                <div class="moleskine-notebook">
                  <div class="notebook-cover yellow">
                    <div class="notebook-skin">Greetings and Appearances</div>
                  </div>
                  <div class="notebook-page squared"></div>
                </div>
            
              </div>
          </Link>
  
          <Link to="/comingsoon">
              <div class="moleskine-wrapper">
                <div class="moleskine-notebook">
                  <div class="notebook-cover green">
                    <div class="notebook-skin">Discussions</div>
                  </div>
                  <div class="notebook-page dotted"></div>
                </div>
            
              </div>
          </Link>
          <Link to="/comingsoon">
              <div class="moleskine-wrapper">
                <div class="moleskine-notebook">
                  <div class="notebook-cover">
                    <div class="notebook-skin">Storytelling</div>
                  </div>
                  <div class="notebook-page"></div>
                </div>
            
              </div>
          </Link>
      </div>

    </>
  )
}

export default Courses