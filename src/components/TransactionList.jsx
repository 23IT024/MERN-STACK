import React from "react";

const TransactionList = (props) => {
  const { transactions, onDeleteTransaction } = props;

  return (
    <div>
      <h3>HISTORY</h3>
      <ul id="List" className="list">
        {transactions.map((eachitem) => (
          <li key={eachitem.id} className={eachitem.amount < 0 ? "minus" : "plus"}>
            <span>
              <button className="delete-btn" onClick={() => onDeleteTransaction(eachitem.id)}>X</button>
            </span>
            <span>{eachitem.title}</span>
            <span>₹{eachitem.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
