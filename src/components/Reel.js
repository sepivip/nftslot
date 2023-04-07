import React from 'react';
import Symbol from './Symbol';
import './Reel.css';


const Reel = ({ result, symbols }) => {
  return (
    <div className="reel">
      <Symbol image={symbols[result].image} altText={symbols[result].altText} />
    </div>
  );
};

export default Reel;
