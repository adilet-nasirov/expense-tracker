import React from "react";

const Expenses = () => {
  return (
    <div className="expenses-container">
      <div>
        <h4>INCOME</h4>
        <p className="money positive">$100.00</p>
      </div>
      <div>
        <h4>EXPENSE</h4>
        <p className="money negative">$50.00</p>
      </div>
    </div>
  );
};

export default Expenses;
