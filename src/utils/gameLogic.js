export const spinReels = (reelCount, symbolCount) => {
    const spinResults = [];
    for (let i = 0; i < reelCount; i++) {
      spinResults.push(Math.floor(Math.random() * symbolCount));
    }
    return spinResults;
  };
  
  export const calculatePayout = (spinResults, paytable) => {
    let payout = 0;
    const symbolCounts = Array(paytable.length).fill(0);
  
    spinResults.forEach((result) => {
      symbolCounts[result]++;
    });
  
    for (let i = 0; i < paytable.length; i++) {
      if (symbolCounts[i] >= paytable[i].minCount) {
        payout += paytable[i].payout;
      }
    }
  
    return payout;
  };
  