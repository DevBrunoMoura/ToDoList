import React from "react";
import { useParams, useHistory } from "react-router-dom";

import Button from "../Button/Index";

import "./style.css";

const TaskDetails = () => {
  const parms = useParams();
  const history = useHistory();

  const handleBackButton = () => {
    history.goBack();
  };

  return (
    <>
      <div className="back-button-container">
        <Button onClick={handleBackButton}> Voltar</Button>
      </div>
      <div className="task-details-container">
        <h2>{parms.taskTitle}</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
          molestiae doloremque culpa nihil voluptas at amet voluptates vel quas,
          labore, ad officiis. Est dolorum odit modi neque, earum corporis
          doloremque?
        </p>
      </div>
    </>
  );
};

export default TaskDetails;
