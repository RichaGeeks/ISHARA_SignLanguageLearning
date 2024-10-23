import './course.css';
import { useEffect } from 'react';
import wavingvideo from '../src/images/waving.mp4';
import helloasl from '../src/images/hello_asl.mp4';
import alphabetasl from '../src/images/ASL_alphabets.jpeg';
import numasl from '../src/images/ASL_numbers.jpeg';

function Course1() {
    useEffect(() => {
        const dropdownHeaders = document.querySelectorAll('.dropdown-header');
        const contentItems = document.querySelectorAll('.content-item');
        const dynamicContent = document.getElementById('dynamic-content');
        const nextButton = document.querySelector('.next-button');

        // Hide the button initially
        nextButton.style.display = 'none';

        let currentContentIndex = -1;
        let currentChapterItems = [];

        // Toggle chapter dropdown visibility
        dropdownHeaders.forEach(header => {
            header.addEventListener('click', () => {
                const chapter = header.parentElement;
                const isOpen = chapter.classList.contains('open');

                // Close all open chapters
                document.querySelectorAll('.chapter').forEach(chapter => {
                    chapter.classList.remove('open');
                });

                // Toggle the clicked chapter
                if (!isOpen) {
                    chapter.classList.add('open');
                }

                // Hide the next button when a new chapter is opened
                nextButton.style.display = 'none';
            });
        });

        // Display content dynamically when clicking on a chapter's item
        contentItems.forEach(item => {
            item.addEventListener('click', () => {
                const chapter = item.closest('.chapter');
                currentChapterItems = chapter.querySelectorAll('.content-item');
                currentContentIndex = Array.from(currentChapterItems).indexOf(item);

                updateContent(item.getAttribute('data-content'));

                // Show the button when content is displayed
                nextButton.style.display = 'block';
            });
        });

        // Event listener for the "Next" button
        nextButton.addEventListener('click', () => {
            if (currentContentIndex < currentChapterItems.length - 1) {
                currentContentIndex++;
                const nextItem = currentChapterItems[currentContentIndex];
                updateContent(nextItem.getAttribute('data-content'));
            } else {
                // Optionally hide the button when there are no more items in the chapter
                nextButton.style.display = 'none';
            }
        });

        // Function to update content dynamically based on the data-content attribute
        function updateContent(contentType) {
            if (contentType === 'history') {
                dynamicContent.innerHTML = `
                    <h1>History of ASL</h1>
                    <p>American Sign Language (ASL) is a rich and complex visual language that has evolved over centuries...</p>
                `;
            } else if (contentType === 'alphabets') {
                dynamicContent.innerHTML = `
                    <h1>Alphabets in ASL</h1>
                    <p>The American Sign Language (ASL) alphabet, also known as the manual alphabet, is a crucial part of ASL...</p>
                    <img src=${alphabetasl} alt="ASL Alphabet" width="400">
                `;
            } else if (contentType === 'phrases') {
                dynamicContent.innerHTML = `
                    <h1>Basic Phrases</h1>
                    <p>1) Hello:</p>
                    <video width="500" height="300" autoplay loop muted playsinline>
                        <source src=${helloasl} type="video/mp4">
                    </video>
                `;
            }
        }
    }, []);

    return (
        <div className="bodycourse">
            <div className="container">
                <aside className="sidebar">
                    <h2>Basics of ASL</h2>

                    <div className="chapter">
                        <h3 className="dropdown-header">Chapter 1</h3>
                        <ul className="dropdown-content">
                            <li className="content-item" data-content="history">1. History of ASL</li>
                            <li className="content-item" data-content="alphabets">2. Alphabets</li>
                            <li className="content-item" data-content="phrases">3. Basic Words and Phrases</li>
                        </ul>
                    </div>
                </aside>

                <main className="content">
                    <div id="dynamic-content">
                        <div className="sign-container">
                            <video width="500" height="300" autoplay loop muted playsinline>
                                <source src={wavingvideo} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <h1 className="highlight-text">In this chapter, we will explore the basics of American Sign Language (ASL)...</h1>
                    </div>
                    <button className="next-button">Next</button>
                </main>
            </div>
        </div>
    );
}

export default Course1;
