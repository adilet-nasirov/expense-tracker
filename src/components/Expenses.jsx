import React, { useContext } from "react";
import { TransactionsContext } from "../Helper/Context";
const Expenses = () => {
  const {transactions} = useContext(TransactionsContext);
  const incomes = count(transactions,"income")
  const expenses = count(transactions,'expense')
  return (
    <div className="expenses-container">
      <div>
        <h4>INCOME</h4>
        <p className="money positive">${incomes}</p>
      </div>
      <div>
        <h4>EXPENSE</h4>
        <p className="money negative">${expenses}</p>
      </div>
    </div>
  );
};
function count(arr,type){
    if(type==='income'){
        let sum =0;
        for(let el of arr){
            let num = Number(el.amount);
            if(num>0) sum+=num;
        }
        return sum;
    }else{
        let sum =0;
        for(let el of arr){
            let num = Number(el.amount);
            if(num<0) sum+=num;
        }
        return Math.abs(sum);
    }
}

export default Expenses;
