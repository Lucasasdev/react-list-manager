import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import Header from "./components/Header";
import TaskDetails from "./components/TaskDetails";

import "./App.css";

const App = () => {
  //Variable/state that store all task datas
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "why do you're learning that framework?",
      completed: true,
    },
    {
      id: 2,
      title: "have you been studying coding correctly",
      completed: false,
    },
    {
      id: 3,
      title: "I've learned coding",
      completed: true,
    },
  ]);

  //hook which get the api with all the tasks, the UseEffet hook receive two params, a function and a list of variables for be looked.
  useEffect(() => {
    const fetchTask = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.cypress.io/todos"
      );

      setTasks(data);
    };

    fetchTask();
  }, []);

  //functions for run some action at todolist
  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }

      return task;
    });

    setTasks(newTasks);
  };

  const handleTaskRemove = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  };

  const handleTaskAddition = (taskTitle) => {
    console.log(taskTitle);
    if (taskTitle === "") {
      return window.alert("Please, fill out the fild!");
    }

    const newTasks = [
      ...tasks,
      {
        id: uuid(),
        title: taskTitle,
        completed: false,
      },
    ];

    setTasks(newTasks);
  };

  // General interface with all components (main component)
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="container">
              <Header />
              <AddTask handleTaskAddition={handleTaskAddition} />
              <Tasks
                tasks={tasks}
                handleTaskClick={handleTaskClick}
                handleTaskRemove={handleTaskRemove}
              />
            </div>
          }
        />

        <Route
          path="/:tasktitle"
          exact
          element={
            <div className="container">
              <Header />
              <TaskDetails />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
