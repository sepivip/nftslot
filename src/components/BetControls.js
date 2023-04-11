import React from 'react';
import '../styles/BetControls.css';


const BetControls = ({ betAmount, setBetAmount, balance }) => {
  const increaseBet = () => {
    if (betAmount < balance) {
      setBetAmount(betAmount + 10);
    }
  };

  const decreaseBet = () => {
    if (betAmount > 10) {
      setBetAmount(betAmount - 10);
    }
  };

  return (
    <div className="bet-controls">
      <button onClick={decreaseBet}>-</button>
      <div className="bet-amount">{betAmount}</div>
      <button onClick={increaseBet}>+</button>
    </div>
  );
};

export default BetControls;
