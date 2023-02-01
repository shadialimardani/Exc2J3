import React, { useState } from "react";

const AddNewItem = (props) => {

  const [inputData, setInputData] = useState({ type: "", amount: 0 });

  const costTypeChangeHandler = (sender) => {
    setInputData((prev) => {
      return { ...prev, type: sender.target.value };
    });
  };

  const costAmountChangeHandler = (sender) => {
    setInputData({ ...inputData, amount: sender.target.value });
  };

  const onClickHandler = (sender) => {
    sender.preventDefault();

    props.addItemFunc(inputData)
    setInputData({ type: "", amount: 0 })
  };

  return (
    <form>
      <label>Cost Type</label>
      <input type="text" value={inputData.type} onChange={costTypeChangeHandler} />

      <label>Cost Amount</label>
      <input type="number" value={inputData.amount} onChange={costAmountChangeHandler} />

      <button onClick={onClickHandler}>ADD</button>
    </form>
  );
};

export default AddNewItem;
