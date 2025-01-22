import React from "react";

const IncomeExpense = ({ transactions }) => {
  let totalIncome = 0;
  let totalExpense = 0;

  // Calculate income and expense using a for loop
  for (let i = 0; i < transactions.length; i++) {
    const transaction = transactions[i];
    if (transaction.amount > 0) {
      totalIncome += transaction.amount; // Positive amounts go to income
    } else {
      totalExpense += transaction.amount; // Negative amounts go to expense
    }
  }

  return (
    <div className="income-expense-container">
      <div className="income">
        <h3>Income</h3>
        <p className="money plus">₹{totalIncome.toFixed(2)}</p>
      </div>
      <div className="expense">
        <h3>Expense</h3>
        <p className="money minus">₹{Math.abs(totalExpense).toFixed(2)}</p>
      </div>
    </div>
  );
};

export default IncomeExpense;
