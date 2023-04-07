import React from 'react';

const Symbol = ({image, altText}) => {
  const imagePath = `/assets/images/symbols/${image}`;
  return (
    <div className="symbol">
      <img src={imagePath} alt={altText} />
    </div>
  );
};

export default Symbol;
