import React from "react";

const TransactionCard = ({id,amount, description,handleDelete}) => {
  let colorOfBorder = Number(amount)>0 ? 'green' : 'red'
  return (
    <div className={`card ${colorOfBorder}`}>
      <p>{description}</p>
      <p>{amount}$</p>
      <button onClick={handleDelete} className="delete-btn" id={id}>X</button>
    </div>
  );
};

export default TransactionCard;
