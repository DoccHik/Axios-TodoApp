import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import "./TodoInfo.css";

const TodoInfo = () => {
  const { id } = useParams();

  const [todo, setTodo] = useState(null);

  const getTodosFromServer = () => {
    axios
      .get(`https://63316635cff0e7bf70ec0ff1.mockapi.io/todos/${id}`)
      .then((response) => {
        setTodo(response.data);
        console.log(todo);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getTodosFromServer();
  }, [id]);

  return (
    <>
      <div className="container">
        {todo && (
          <>
            {todo.isCompleted && (
              <div className="todo-info__done">Задача выполнена</div>
            )}
            <section className="todo-info">
              <Link to="/task" className="todo-info__exit">
                Вернуться обратно
              </Link>
              <h1 className="todo-info__title">{todo.title}</h1>
              <p className="todo-info__description">{todo.description}</p>
              <div className="todo-info-buttons">
                <button>Редактировать</button>
                <button>Выполнено</button>
              </div>
            </section>
          </>
        )}
      </div>
    </>
  );
};

export default TodoInfo;
