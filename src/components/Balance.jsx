import React, { useContext } from "react";
import { TransactionsContext } from "../Helper/Context";
export const Balance = () => {
  const {transactions} = useContext(TransactionsContext)
  let sum = 0;
  for(let el of transactions){
    sum+= Number(el.amount)
  }
  return (
    <div>
      <p className="text">YOUR BALANCE</p>
      <h2>$ {sum}</h2>
    </div>
  );
};
