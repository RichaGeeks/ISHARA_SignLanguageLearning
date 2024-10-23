import './courses.css'

function Courses() {

  return (
    <>
      <div class="main-content">
          <div class="moleskine-wrapper">
            <div class="moleskine-notebook">
              <div class="notebook-cover purple">
                <div class="notebook-skin">Basics of ASL</div>
              </div>
              <div class="notebook-page"></div>
            </div>
            <h4>Edition 1</h4>
          </div>
  
          <div class="moleskine-wrapper">
            <div class="moleskine-notebook">
              <div class="notebook-cover blue">
                <div class="notebook-skin">Maths and Relationships</div>
              </div>
              <div class="notebook-page ruled"></div>
            </div>
            <h4>Edition 2</h4>
          </div>
  
          <div class="moleskine-wrapper">
            <div class="moleskine-notebook">
              <div class="notebook-cover yellow">
                <div class="notebook-skin">Greetings and Appearances</div>
              </div>
              <div class="notebook-page squared"></div>
            </div>
            <h4>Edition 3</h4>
          </div>
  
          <div class="moleskine-wrapper">
            <div class="moleskine-notebook">
              <div class="notebook-cover green">
                <div class="notebook-skin">Discussions</div>
              </div>
              <div class="notebook-page dotted"></div>
            </div>
            <h4>Edition 4</h4>
          </div>

          <div class="moleskine-wrapper">
            <div class="moleskine-notebook">
              <div class="notebook-cover">
                <div class="notebook-skin">Storytelling</div>
              </div>
              <div class="notebook-page"></div>
            </div>
            <h4>Edition 5</h4>
          </div>
      </div>

    </>
  )
}

export default Courses