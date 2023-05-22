import React from "react";
import Expenseform  from "./Expenseform";
 
const NewEx=(props)=>{
  const saveExpenseDataHandler=(enteredData)=>{
   const expenseData={
    ...enteredData
   };
   props.onAddExpense(expenseData);
  }

    return (
        <div className="new-expense">
         <Expenseform onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    );
}

export default NewEx;