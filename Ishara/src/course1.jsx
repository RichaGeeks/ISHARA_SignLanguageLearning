import React, { useState } from 'react';
import './course1.css';
import wavingvideo from '../src/images/waving.mp4';
import helloasl from '../src/images/hello_asl.mp4';
import alphabetasl from '../src/images/ASL_alphabets.jpeg';
import numasl from '../src/images/ASL_numbers.jpeg';

const Course1 = () => {
  const [activeChapter, setActiveChapter] = useState(null);
  const [activeContent, setActiveContent] = useState('');
  const [lessonIndex, setLessonIndex] = useState(0);

  const lessons = {
    1: ['history', 'alphabets', 'phrases'], // Chapter 1 lessons
    2: ['numbers'], // Chapter 2 lessons
  };

  const toggleChapter = (chapter) => {
    setActiveChapter(activeChapter === chapter ? null : chapter);
    setActiveContent(''); // Reset content when toggling chapters
    setLessonIndex(0); // Reset lesson index when switching chapters
  };

  const showContent = (content) => {
    setActiveContent(content);
    setLessonIndex(lessons[activeChapter].indexOf(content)); // Set the current lesson index based on clicked item
  };

  const handleNext = () => {
    const nextLessonIndex = lessonIndex + 1;
    if (nextLessonIndex < lessons[activeChapter].length) {
      const nextLesson = lessons[activeChapter][nextLessonIndex];
      setLessonIndex(nextLessonIndex);
      setActiveContent(nextLesson);
    }
  };

  return (
    <div className="containerC1">
      <aside className="sidebar">
        <h2>Basics of ASL</h2>

        {/* Chapter 1 */}
        <div className="chapter">
          <h3 className="dropdown-header" onClick={() => toggleChapter(1)}>
            Chapter 1
          </h3>
          <ul className={`dropdown-content ${activeChapter === 1 ? 'open' : ''}`}>
            <li className="content-item" onClick={() => showContent('history')}>
              1. History of ASL
            </li>
            <li className="content-item" onClick={() => showContent('alphabets')}>
              2. Alphabets
            </li>
            <li className="content-item" onClick={() => showContent('phrases')}>
              3. Basic Words and Phrases
            </li>
          </ul>
        </div>

        {/* Chapter 2 */}
        <div className="chapter">
          <h3 className="dropdown-header" onClick={() => toggleChapter(2)}>
            Chapter 2
          </h3>
          <ul className={`dropdown-content ${activeChapter === 2 ? 'open' : ''}`}>
            <li className="content-item" onClick={() => showContent('numbers')}>
              1. Numbers 1 to 10
            </li>
          </ul>
        </div>
      </aside>

      <main className="content">
        <div id="dynamic-content">
          {/* Display the content based on what is clicked */}
          {activeContent === '' && (
            <div className="sign-container">
              <video width="500" height="300" autoPlay loop muted playsInline>
                <source src={wavingvideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <h1 className="highlight-text">
                In this chapter, we will explore the basics of American Sign Language (ASL), 
                beginning with its history and cultural significance. We will then learn 
                how to sign each letter of the alphabet, followed by common everyday words 
                and phrases such as "hello," "thank you," and "how are you?"
              </h1>
            </div>
          )}

          {/* History of ASL */}
          {activeContent === 'history' && (
            <div className="sign-container">
              <h1 className="highlight-text">History of ASL</h1>
              <p className="subheading">
                Learn about the origins and development of American Sign Language (ASL), 
                its cultural significance, and how it became an important part of 
                communication for the deaf community.
              </p>
            </div>
          )}

          {/* Alphabets */}
          {activeContent === 'alphabets' && (
            <div className="sign-container">
              <img src={alphabetasl} alt="ASL Alphabets" className="sign-image" />
              <h1 className="highlight-text">ASL Alphabets</h1>
              <p className="subheading">
                Here are the signs for the letters A to Z in ASL. Practice them to master 
                finger spelling and improve your ASL communication skills.
              </p>
            </div>
          )}

          {/* Basic Words and Phrases */}
          {activeContent === 'phrases' && (
            <div className="sign-container">
              <video width="500" height="300" autoPlay loop muted playsInline>
                <source src={helloasl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <h1 className="highlight-text">Basic Words and Phrases</h1>
              <p className="subheading">
                In this section, you will learn how to sign basic greetings and phrases 
                like "hello," "thank you," and "goodbye."
              </p>
            </div>
          )}

          {/* Numbers 1 to 10 */}
          {activeContent === 'numbers' && (
            <div className="sign-container">
              <img src={numasl} alt="ASL Numbers" className="sign-image" />
              <h1 className="highlight-text">ASL Numbers (1 to 10)</h1>
              <p className="subheading">
                Learn how to sign numbers from 1 to 10 in ASL, an essential skill for 
                communicating numerical information.
              </p>
            </div>
          )}
        </div>

        {/* Show Next button only if there are more lessons */}
        {activeChapter && lessonIndex < lessons[activeChapter].length - 1 && (
          <button className="next-button" onClick={handleNext}>
            Next
          </button>
        )}
      </main>
    </div>
  );
};

export default Course1;
