import React ,{useState}from "react";
import NewEx from "./components/NewExpense/NewEx";
import Expenses from "./components/Expense/Expenses";

import { DUMMY_ARR } from "./Expenselist";
const MyApp = () => {
 const [expenseArray,setExpenseArray]=useState(DUMMY_ARR);

  const addExpenseHandler = (expense) => {
    setExpenseArray((prevState)=>{
    return [expense,...prevState];
    })
  };
  return (
    <div>
      <NewEx onAddExpense={addExpenseHandler} />
     
      <Expenses items={expenseArray} />
    </div>
  );
};

export default MyApp;
