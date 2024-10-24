import React, { useState } from 'react';
import './course2.css';
import wavingvideo from '../src/images/waving.mp4';
import blue from '../src/images/blue_asl.mp4';
import green from '../src/images/green_asl.mp4';
import square from '../src/images/square_asl.mp4';
import diamond from '../src/images/diamond_asl.mp4';

const Course2 = () => {
  const [activeChapter, setActiveChapter] = useState(null);
  const [activeContent, setActiveContent] = useState('');
  const [lessonIndex, setLessonIndex] = useState(0);

  const colorLessons = ['blue', 'green'];
  const shapeLessons = ['square', 'diamond'];

  const toggleChapter = (chapter) => {
    setActiveChapter(activeChapter === chapter ? null : chapter);
    setActiveContent(''); // Reset content when toggling chapters
    setLessonIndex(0); // Reset lesson index when switching chapters
  };

  const showContent = (content) => {
    setActiveContent(content);
    setLessonIndex(0); // Reset to first lesson in the section
  };

  const handleNext = () => {
    const lessonsList = activeContent === 'colours' ? colorLessons : shapeLessons;
    const nextLessonIndex = lessonIndex + 1;

    if (nextLessonIndex < lessonsList.length) {
      setLessonIndex(nextLessonIndex);
    }
  };

  const getLessonVideo = () => {
    if (activeContent === 'colours') {
      switch (colorLessons[lessonIndex]) {
        case 'blue':
          return blue;
        case 'green':
          return green;
        default:
          return wavingvideo; // Default video
      }
    } else if (activeContent === 'shapes') {
      switch (shapeLessons[lessonIndex]) {
        case 'square':
          return square;
        case 'diamond':
          return diamond;
        default:
          return wavingvideo; // Default video
      }
    }
  };

  return (
    <div className="containerC2">
      <aside className="sidebar">
        <h2>Appearances</h2>

        {/* Chapter 3 */}
        <div className="chapter">
          <h3 className="dropdown-header" onClick={() => toggleChapter(3)}>
            Chapter 3
          </h3>
          <ul className={`dropdown-content ${activeChapter === 3 ? 'open' : ''}`}>
            <li className="content-item" onClick={() => showContent('colours')}>
              1. Vocabulary for Colours
            </li>
            <li className="content-item" onClick={() => showContent('shapes')}>
              2. Vocabulary for Shapes
            </li>
          </ul>
        </div>
      </aside>

      <main className="content">
        <div id="dynamic-content">
          {/* Default Content */}
          {activeContent === '' && (
            <div className="sign-container">
              <video width="500" height="300" autoPlay loop muted playsInline>
                <source src={wavingvideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <h1 className="highlight-text">
                Here, we will be learning how basic colors and shapes are described in American Sign Language.
              </h1>
            </div>
          )}

          {/* Vocabulary for Colours */}
          {activeContent === 'colours' && (
            <div className="sign-container">
              <video width="500" height="300" autoPlay loop muted playsInline>
                <source src={getLessonVideo()} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <h1 className="highlight-text">Vocabulary for Colours</h1>
              <p className="subheading">
                Learn how to sign different colors in ASL, such as blue, green, and more.
              </p>
            </div>
          )}

          {/* Vocabulary for Shapes */}
          {activeContent === 'shapes' && (
            <div className="sign-container">
              <video width="500" height="300" autoPlay loop muted playsInline>
                <source src={getLessonVideo()} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <h1 className="highlight-text">Vocabulary for Shapes</h1>
              <p className="subheading">
                Learn how to sign basic shapes in ASL, such as squares, diamonds, and more.
              </p>
            </div>
          )}
        </div>

        {/* Show Next button only if there are more lessons */}
        {activeContent && lessonIndex < (activeContent === 'colours' ? colorLessons.length : shapeLessons.length) - 1 && (
          <button className="next-button" onClick={handleNext}>
            Next
          </button>
        )}
      </main>
    </div>
  );
};

export default Course2;
