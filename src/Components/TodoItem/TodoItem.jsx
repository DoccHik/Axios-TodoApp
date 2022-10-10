import React from "react";

import "./TodoItem.css";

// import { todos } from "../../shared/TodosData";
import Button from "@mui/material/Button";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";

const TodoItem = ({ todos, deleteTask, isLoading, toggleDoneTaskHandler }) => {
  return (
    <>
      {isLoading && <Loader />}
      <ul className="todo-item__list">
        {todos.length > 0 ? (
          todos.map((todo) => (
            <li className="todo-item" key={todo.id}>
              <div className="todo-item__settigs">
                {todo.isCompleted ? (
                  <Link to={`/task/${todo.id}`}>
                    <del className="todo-item__title">{todo.title}</del>
                  </Link>
                ) : (
                  <Link to={`/task/${todo.id}`}>
                    <h2 className="todo-item__title">{todo.title}</h2>
                  </Link>
                )}
              </div>
              <div className="todo-item-buttons">
                <Button
                  onClick={() => toggleDoneTaskHandler(todo)}
                  variant="contained"
                  color="success"
                  size="small"
                >
                  {todo.isCompleted ? "Не выполнено" : "Выполнено"}
                </Button>
                <Button
                  onClick={() => deleteTask(todo.id)}
                  variant="outlined"
                  color="error"
                  size="small"
                >
                  Удалить
                </Button>
              </div>
            </li>
          ))
        ) : (
          <h1>Добавьте новую задачу</h1>
        )}
      </ul>
    </>
  );
};

export default TodoItem;
