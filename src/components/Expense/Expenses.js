import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import "./Expense.css";
import ExpenseChart from './ExpenseChart'

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");
  function optionHandler(opt) {
    console.log(opt);
    setFilteredYear(opt);
  }

  let filterExpense = props.items.filter((expense) => {
    const expenseYear = new Date(expense.expenseDate).getFullYear().toString();
    return expenseYear === filteredYear;
  });
  
  let filterArray = filterExpense.map((expense, index) => (
    <ExpenseItem
      key={index}
      expenseDate={new Date(expense.expenseDate)}
      expenseAmount={expense.expenseAmount}
      expenseTitle={expense.expenseTitle}
    />
  ));
  console.log(props.items[0].expenseDate.getMonth());

  return (
    <div className="expense-item-container">
      
      <ExpenseFilter selectedValue={filteredYear} getOptions={optionHandler} />
      <ExpenseChart  expense={filterExpense}/>
      {filterArray.length===0 ?<div className="pop-up-message">Expense Not Found</div>: filterArray}
     
    </div>
  );
};

export default Expenses;
