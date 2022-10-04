import React, { useContext } from "react";
import TransactionCard from "./TransactionCard";
import { TransactionsContext } from "../Helper/Context";
const History = () => {
  const {transactions, setTransactions} = useContext(TransactionsContext);
  const handleDelete = (e)=>{
    let id = (e.target.id);
    let newTrans = transactions;
    setTransactions(newTrans.filter((el,i)=> i!=id));
  }
  return (
    <div>
      <h3>History</h3>
      <div>
        {
            transactions ? transactions.map((item,i)=> <TransactionCard id={i} amount ={item.amount} description={item.description} handleDelete={handleDelete}/>) : ''
        }
      </div>
    </div>
  );
};

export default History;
