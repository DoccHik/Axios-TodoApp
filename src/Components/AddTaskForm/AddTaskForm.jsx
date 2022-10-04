import React from "react";

import "./AddTaskForm.css";

import Button from "@mui/material/Button";

const AddTaskForm = ({ addNewTask }) => {
  const [taskTitle, setTaskTitle] = React.useState("");
  const [taskDescription, setTaskDescription] = React.useState("");

  const createTask = (e) => {
    e.preventDefault();

    const task = {
      title: taskTitle,
      isCompleted: false,
      Description: taskDescription,
    };

    addNewTask(task);
    setTaskTitle("");
    setTaskDescription("");
  };

  return (
    <>
      <form onSubmit={createTask} className="add-task-form">
        <input
          className="add-task-form__input"
          type="text"
          placeholder="Введите название"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          required
        />
        <input
          className="add-task-form__input"
          type="text"
          placeholder="Введите описание (необязательно)"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        />
        <Button type="submit" variant="outlined" color="success" size="small">
          Добавить задачу
        </Button>
      </form>
    </>
  );
};

export default AddTaskForm;
