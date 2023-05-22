import React, { useState } from "react";
import "./Expenseform.css";
const Expenseform = (props) => {
  // const [enteredTilte,setEnteredTitle]=useState("");
  // const [enteredAmount,setEnteredAmount]=useState("");
  // const [enteredDate,setEnteredDate]=useState("");
  // excpet doing likew that we can write in one line
  const [userInput, setUserInput] = useState({
    expenseTitle: "",
    expenseAmount: "",
    expenseDate: "",
  });

  const titleChangeHandler = (event) => {
    //  setUserInput({
    //  ...userInput,
    //  enteredTitle:event.target.value
    //  });

    setUserInput((prevState) => {
      return { ...prevState, expenseTitle: event.target.value };
    });
  };
  const amountChangeHandler = (event) => {
    // setUserInput({
    //     ...userInput,
    //     enteredAmount:event.target.value
    //     });
    setUserInput((prevState) => {
      return { ...prevState, expenseAmount: event.target.value };
    });
  };
  const dateChangeHandler = (event) => {
    // setUserInput({
    //     ...userInput,
    //     enteredDate:event.target.value
    //     });
    setUserInput((prevState) => {
      return { ...prevState, expenseDate: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    props.onSaveExpenseData(userInput);
    setUserInput({
      expenseTitle: "",
      expenseAmount: "",
      expenseDate: "",
    });
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense_controls">
        <div className="new-expense_control">
          <label title="">Title</label><br/>
          <input
            type="text"
            value={userInput.title}
            onChange={titleChangeHandler}
            required
          />
        </div>
        <div className="new-expense_control">
          <label title="">Amount</label><br/>
          <input
            type="number"
            value={userInput.amount}
            min={0.01}
            step={0.01}
            onChange={amountChangeHandler}
            required
          />
        </div>
        <div className="new-expense_control">
          <label title="">Date</label><br/>
          <input
            type="date"
            value={userInput.date}
            min={2019}
            max={2025}
            onChange={dateChangeHandler}
            required
          />
        </div>
      

        <div className="new-expense_actions">
          <button type="submit">Add Item</button>
        </div>
        </div>
    
    </form>
  );
};

export default Expenseform;
