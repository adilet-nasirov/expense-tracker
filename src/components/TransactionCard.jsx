import React from "react";

const TransactionCard = ({amount, description}) => {
  return (
    <div className="card">
      <p>{description}</p>
      <p>{amount}$</p>
      <button className="delete-btn">X</button>
    </div>
  );
};

export default TransactionCard;
