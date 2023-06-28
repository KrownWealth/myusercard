import React from 'react';


const NumberDisplay = ({ number }) => {
  const getColor = () => {
    if (number % 2 === 0) {
      // Even number (green)
      return 'green';
    } else if (number % 2 !== 0 && isPrime(number)) {
      // Prime number (red)
      return 'red';
    } else {
      // Odd number (yellow)
      return 'yellow';
    }
  };

  const isPrime = (num) => {
    if (num < 2) {
      return false;
    }
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };

  const numberColor = getColor();

  return (
    <div style={{ color: numberColor, backgroundColor:'blue' }}>
      {number}
    </div>
  );
};

export default NumberDisplay;
