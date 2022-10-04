import React from "react";

const TransactionCard = ({amount, description}) => {
  let colorOfBorder = Number(amount)>0 ? 'green' : 'red'
  return (
    <div className={`card ${colorOfBorder}`}>
      <p>{description}</p>
      <p>{amount}$</p>
      <button className="delete-btn">X</button>
    </div>
  );
};

export default TransactionCard;
