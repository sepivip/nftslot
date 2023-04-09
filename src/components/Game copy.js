import React, { useState, useEffect } from 'react';
import Reel from './Reel';
import BetControls from './BetControls';
import '../styles/game.css';

import { spinReels, calculatePayout } from '../utils/gameLogic';

const Game = () => {
  const [reelResults, setReelResults] = useState([0, 0, 0, 0, 0]);
  const [balance, setBalance] = useState(1000);
  const [betAmount, setBetAmount] = useState(10);
  const [autoSpin, setAutoSpin] = useState(false);

  const symbols = [
    { image: 'low/bitcoin.png', altText: 'Bitcoin' },
    { image: 'low/ethereum.png', altText: 'Ethereum' },
    { image: 'low/cardano.png', altText: 'Cardano' },
    { image: 'low/binance-coin.png', altText: 'Binance Coin' },
    { image: 'low/polkadot.png', altText: 'Polkadot' },
    { image: 'high/nft-1.png', altText: 'NFT 1' },
    { image: 'high/nft-2.png', altText: 'NFT 2' },
    { image: 'high/nft-3.png', altText: 'NFT 3' },
    { image: 'high/nft-4.png', altText: 'NFT 4' },
    { image: 'high/nft-5.png', altText: 'NFT 5' },
  ];

  const paytable = [
    { minCount: 3, payout: 50 }, // Low-paying symbols
    { minCount: 3, payout: 100 }, // High-paying symbols
    // Add more symbols and payouts here
  ];

  const handleSpin = () => {
    const spinResults = spinReels(5, 10);
    const payout = calculatePayout(spinResults, paytable);

    setReelResults(spinResults);
    setBalance(balance - betAmount + payout);
  };

  useEffect(() => {
    let autoSpinTimeout;
    if (autoSpin) {
      autoSpinTimeout = setTimeout(handleSpin, 2000); // Auto spin every 2 seconds
    }

    return () => {
      clearTimeout(autoSpinTimeout);
    };
  }, [autoSpin, handleSpin]);

  const toggleAutoSpin = () => {
    setAutoSpin(!autoSpin);
  };

  return (
    <div className="game">
      <div className="game-container">
        <div className="reels">
          {reelResults.map((result, index) => (
            <Reel key={index} result={result} symbols={symbols} />
          ))}
        </div>
        <div className="controls">
          <div className="balance-display">
            <div className="balance-label">Balance</div>
            <div className="balance-amount">{balance}</div>
          </div>
          <BetControls betAmount={betAmount} setBetAmount={setBetAmount} balance={balance} />
          <button className="spin-button" onClick={handleSpin}>
            Spin
          </button>
          <button className={`auto-spin-button ${autoSpin ? 'active' : ''}`} onClick={toggleAutoSpin}>
      {autoSpin ? 'Stop Auto Spin' : 'Auto Spin'}
    </button>
        </div>
      </div>
    </div>
  );
};

export default Game;
