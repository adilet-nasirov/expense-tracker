import React, { useState } from "react";

const AddTransaction = () => {
  const [description, setDescription]= useState('');
  const [amount, setAmount] = useState(0);
  return (
    <div className="add-transaction-container">
      <h3>Add new transaction</h3>
      <div style={{ margin: "15px 0" }}>
        <label for='text'>Text</label>
        <input id="text" type="text" placeholder="Enter text..."  value={description} onChange={(e)=>setDescription(e.target.value)}/>
        <label for='amount'>Amount</label>
        <input type="number" id="amount" placeholder="Enter amount..." value={amount ? amount : ''} onChange={(e)=>setAmount(e.target.value)}/>
      </div>
      <div>
        <button className="btn">Add transaction</button>
      </div>
    </div>
  );
};

export default AddTransaction;
