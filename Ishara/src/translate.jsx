import './translate.css'; 
import Footer from '../src/footer.jsx'
import React, { useState } from 'react';
import Nav from '../src/nav.jsx'
import aslA from '../src/images/aslA.jpeg';
import aslB from '../src/images/aslB.jpeg';
import aslC from '../src/images/aslC.jpeg';
import aslD from '../src/images/aslD.jpeg';
import aslE from '../src/images/aslE.jpeg';
import aslF from '../src/images/aslF.jpeg';
import aslG from '../src/images/aslG.jpeg';
import aslH from '../src/images/aslH.png';
import aslI from '../src/images/aslI.png';
import aslJ from '../src/images/aslJ.png';
import aslK from '../src/images/aslK.png';
import aslL from '../src/images/aslL.png';
import aslM from '../src/images/aslM.png';
import aslN from '../src/images/aslN.png';
import aslO from '../src/images/aslO.png';
import aslP from '../src/images/aslP.png';
import aslQ from '../src/images/aslQ.png';
import aslR from '../src/images/aslR.png';
import aslS from '../src/images/aslS.png';
import aslT from '../src/images/aslT.png';
import aslU from '../src/images/aslU.png';
import aslV from '../src/images/aslV.png';
import aslW from '../src/images/aslW.png';
import aslX from '../src/images/aslX.png';
import aslY from '../src/images/aslY.png';
import aslZ from '../src/images/aslZ.png';
import asl0 from '../src/images/asl0.png';
import asl1 from '../src/images/asl1.png';
import asl2 from '../src/images/asl2.png';
import asl3 from '../src/images/asl3.png';
import asl4 from '../src/images/asl4.png';
import asl5 from '../src/images/asl5.png';
import asl6 from '../src/images/asl6.png';
import asl7 from '../src/images/asl7.png';
import asl8 from '../src/images/asl8.png';
import asl9 from '../src/images/asl9.png';

const aslData = {
  asl: {
    letters: [
      { letter: 'A', image_url: aslA, notes: '' },
      { letter: 'B', image_url: aslB, notes: '' },
      { letter: 'C', image_url: aslC, notes: '' },
      { letter: 'D', image_url: aslD, notes: '' },
      { letter: 'E', image_url: aslE, notes: '' },
      { letter: 'F', image_url: aslF, notes: '' },
      { letter: 'G', image_url: aslG, notes: '' },
      { letter: 'H', image_url: aslH, notes: '' },
      { letter: 'I', image_url:aslI , notes: '' },
      { letter: 'J', image_url: aslJ, notes: '' },
      { letter: 'K', image_url: aslK, notes: '' },
      { letter: 'L', image_url:aslL , notes: '' },
      { letter: 'M', image_url:aslM, notes: '' },
      { letter: 'N', image_url: aslN, notes: '' },
      { letter: 'O', image_url: aslO, notes: '' },
      { letter: 'P', image_url:aslP , notes: '' },
      { letter: 'Q', image_url:aslQ, notes: '' },
      { letter: 'R', image_url: aslR, notes: '' },
      { letter: 'S', image_url:aslS , notes: '' },
      { letter: 'T', image_url:aslT , notes: '' },
      { letter: 'U', image_url: aslU, notes: '' },
      { letter: 'V', image_url:aslV , notes: '' },
      { letter: 'W', image_url:aslW , notes: '' },
      { letter: 'X', image_url:aslX, notes: '' },
      { letter: 'Y', image_url: aslY, notes: '' },
      { letter: 'Z', image_url:aslZ , notes: '' }
    ],
    numbers: [
      { number: '0', image_url: asl0, notes: '' },
      { number: '1', image_url: asl1, notes: '' },
      { number: '2', image_url: asl2, notes: '' },
      { number: '3', image_url: asl3, notes: '' },
      { number: '4', image_url: asl4, notes: '' },
      { number: '5', image_url: asl5, notes: '' },
      { number: '6', image_url:asl6, notes: '' },
      { number: '7', image_url: asl7, notes: '' },
      { number: '8', image_url: asl8, notes: '' },
      { number: '9', image_url: asl9, notes: '' }
    ]
  }
};

const Translate = () => {
  const [sentence, setSentence] = useState('');
  const [translatedSigns, setTranslatedSigns] = useState([]);

  const translateToASL = (sentence) => {
    const words = sentence.toUpperCase().split(' '); // Split the sentence into words
    const signImages = [];

    words.forEach((word) => {
      const wordImages = [];
      for (let char of word) {
        const letterSign = aslData.asl.letters.find((item) => item.letter === char);
        const numberSign = aslData.asl.numbers.find((item) => item.number === char);
        const sign = letterSign || numberSign;

        if (sign) {
          wordImages.push(
            <div className="sign-container" key={char}>
              <img src={sign.image_url} alt={`Sign for ${char}`} className="sign-image" />
              <span>{char}</span>
            </div>
          );
        }
      }
      signImages.push(<div className="word-container" key={word}>{wordImages}</div>);
    });

    setTranslatedSigns(signImages);
  };

  return (
    <div className="bgtranslate">
     
      <div className="headert">
      <Nav/>
        <div className="container">
          <h1 className="h1trans">Ishara Translator</h1>
        </div>
      </div>
      <main className="maint">
        <section className="simulator">
          <div className="container">
            <h2 className="h2trans">Type a Sentence</h2>
            <input
              type="text"
              id="sentence-input"
              placeholder="Type here..."
              value={sentence}
              onChange={(e) => setSentence(e.target.value)}
            />
            <button id="translate-btn" onClick={() => translateToASL(sentence)}>
              Translate
            </button>
            <div id="sign-images" className="sign-images-container">
              {translatedSigns}
            </div>
            
          </div>
          
        </section>
        
      </main>
      <Footer />
    </div>
  );
};

export default Translate;
