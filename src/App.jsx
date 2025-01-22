import React, { useState } from "react";
import Addtransaction from "./components/Addtransaction";
import TransactionList from "./components/TransactionList";
import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpense"; // Import this component
import "./App.css";

function App() {
  const [transaction, setTransaction] = useState([
    { id: 1, title: "laptop", amount: -5000 },
    { id: 2, title: "salary", amount: 25000 },
    { id: 3, title: "trip", amount: -6000 },
  ]);

  const onAddTransaction = (data) => {
    const modify = { ...data, id: Math.random() * 1000 };
    setTransaction([...transaction, modify]);
  };

  const onDeleteTransaction = (id) => {
    setTransaction((prevTransactions) =>
      prevTransactions.filter((item) => item.id !== id)
    );
  };

  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <Balance transactions={transaction} />
      <IncomeExpense transactions={transaction} /> {/* Add IncomeExpense */}
      <Addtransaction onAdd={onAddTransaction} />
      <TransactionList
        transactions={transaction}
        onDeleteTransaction={onDeleteTransaction}
      />
    </div>
  );
}

export default App;
