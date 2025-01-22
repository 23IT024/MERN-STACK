import React, { useState } from "react"; 

const Addtransaction = (props) => {
  const { onAdd } = props;
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const onTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const onAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    
    // Check if both title and amount are empty
    if (!title || !amount) {
      alert("Please enter both title and amount.");
      return; // Prevent adding the transaction
    }
  
    console.log("Transaction added:", { title, amount });
    
    // Add transaction only if validation passes
    onAdd({ title, amount });
  };
  

  return (
    <div>
      <h3>ADD NEW</h3>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Enter title..."
            value={title}
            onChange={onTitleChange}
          />
        </div>

        <div>
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            name="amount"
            id="amount"
            placeholder="Enter amount..."
            value={amount}
            onChange={onAmountChange}
          />
        </div>

        <div>
          <button className="btn" type="submit">Add Transaction</button>
        </div>
      </form>
    </div>
  );
};

export default Addtransaction;
