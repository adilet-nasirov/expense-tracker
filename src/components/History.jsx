import React, { useContext } from "react";
import TransactionCard from "./TransactionCard";
import { TransactionsContext } from "../Helper/Context";
const History = () => {
  const {transactions, setTransactions} = useContext(TransactionsContext);
  return (
    <div>
      <h3>History</h3>
      <div>
        {
            transactions ? transactions.map(item=> <TransactionCard amount ={item.amount} description={item.description}/>) : ''
        }
      </div>
    </div>
  );
};

export default History;
