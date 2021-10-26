import React, { useState } from "react";

import Button from "./Button";

import "./AddTask.css";
import "./Button.css";

const AddTask = ({ handletaskAddition }) => {
  const [inputData, setInputData] = useState("");

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const handleAddTaskClick = () => {
    handletaskAddition(inputData);
    setInputData("");
  };

  return (
    <div className="add-task-container ">
      <input
        onChange={handleInputChange}
        value={inputData}
        className="add-task-input"
        type="text"
      />
      <div className="add-task-button-container">
        <Button onClick={handleAddTaskClick} className="button">
          {" "}
          Adicionar
        </Button>
      </div>
    </div>
  );
};

export default AddTask;
