import React, { useContext, useState } from "react";
import { TransactionsContext } from "../Helper/Context";
const AddTransaction = () => {
  const {transactions, setTransactions} = useContext(TransactionsContext);
  const [description, setDescription]= useState('');
  const [amount, setAmount] = useState(0);
  const addTransaction=()=>{
    let arr = transactions ? [...transactions] : [];
    arr.push({amount:amount, description: description})
    setTransactions(arr);
  }
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
        <button onClick={addTransaction} className="btn">Add transaction</button>
      </div>
    </div>
  );
};

export default AddTransaction;
