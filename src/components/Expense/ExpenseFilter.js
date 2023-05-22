import React from "react";
import "./ExpenseFilter.css"
export default function ExpenseFilter(props) {
  function optionChange(event){
    props.getOptions(event.target.value);
    
  }
  return (
    <div className="expense-filter">
      <label className="label-name">Filter by Year</label>
      <select className="options"  onChange={optionChange} >
        <option value="" disabled selected>Year</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
        <option value="2023">2023</option>
      </select>
    </div>
  );
}

