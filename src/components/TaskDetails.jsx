import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "./Button";
import Header from "./Header";
import "./TaskDetails.css";

const TaskDetails = () => {
  const params = useParams();

  const navigate = useNavigate();

  const handleTaskBackClick = () => {
    //same action of navgate.goBack()
    navigate(-1);
  };

  return (
    <>
      <Header />
      <div className="back-button-container">
        <Button onClick={handleTaskBackClick}>Voltar</Button>
      </div>

      <div className="task-details-container">
        <h2>{params.tasktitle}</h2>
        <p>
          content Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Quos, delectus odio dicta beatae nihil saepe?
        </p>
      </div>
    </>
  );
};

export default TaskDetails;
