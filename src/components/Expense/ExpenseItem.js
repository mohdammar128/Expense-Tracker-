import React from "react";
import "./ExpenseItem.css"
// Subcomponenet
function ExpenseDate(props) {
  const monthName = props.expenseDate.toLocaleString("en-US", {
    month: "long",
  });
  const year = props.expenseDate.getFullYear();
  const day = props.expenseDate.getDate();
  return (
    <div className="expense-item-date">
      <div>{monthName}</div>
      <div>{year}</div>
      <div>{day}</div>
    </div>
  );
}

function ExpenseTilte(props) {
  return (
    <div className="expense-item-title">
     <h2>{props.expenseTitle}</h2>
    </div>
  );
}

function ExpenseAmount(props) {
  return <div className="expense-item-price"><p>${props.expenseAmount}</p></div>;
}

// Main component
function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate expenseDate={props.expenseDate} />
      <ExpenseTilte expenseTitle={props.expenseTitle} />
      <ExpenseAmount expenseAmount={props.expenseAmount} />
    </div>
  );
}

export default ExpenseItem;
