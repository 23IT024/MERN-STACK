import React from 'react';

const Balance = ({ transactions }) => {
  // Calculate the total balance (sum of all amounts) using reduce
  const balance = transactions.reduce((accumulator, currentTransaction) => {
    return accumulator + currentTransaction.amount;
  }, 0); // Initial value is 0

  return (
    <div className="balance-container">
      <h3>Balance</h3>
      <div className={`balance ${balance < 0 ? 'negative' : 'positive'}`}>
        ₹{balance.toFixed(2)}
      </div>
    </div>
  );
};

export default Balance;
