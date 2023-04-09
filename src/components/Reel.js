import React from 'react';
import Symbol from './Symbol';
import '../styles/reel.css';

const Reel = ({ result, symbols, spinning }) => {
  return (
    <div className={`reel${spinning ? ' spinning' : ''}`}>
      <Symbol image={symbols[result].image} altText={symbols[result].altText} />
    </div>
  );
};

export default Reel;
