import React from 'react';
import { useNavigate } from 'react-router-dom';
import './comingsoon.css';

const ComingSoon = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/');
  };

  return (
    <div className="coming-soon-container">
      <h1 className="h1CS">Coming Soon</h1>
      <p className="pCS">We are working hard to bring you this feature. Stay tuned!</p>
      <button className="back-button" onClick={goBack}>
        Go Back
      </button>
    </div>
  );
};

export default ComingSoon;
