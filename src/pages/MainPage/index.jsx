import axios from "axios";
import React, { useEffect } from "react";
import AddTaskForm from "../../Components/AddTaskForm/AddTaskForm";
import TodoItem from "../../Components/TodoItem/TodoItem";

const AllTodos = () => {
  const [todos, setTodos] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const toggleDoneTaskHandler = (taskItem) => {
    const temp = { ...taskItem };
    temp.isCompleted = !temp.isCompleted;
    axios
      .put(
        `https://63316635cff0e7bf70ec0ff1.mockapi.io/todos/${taskItem.id}`,
        temp
      )
      .then((response) => {
        getTodosFromServer();
        console.log("Задача изменена =>", response.data);
      })
      .catch((error) => console.log(error));
  };

  const addNewTask = (taskItem) => {
    setIsLoading(true);
    // console.log(taskItem);
    axios
      .post("https://63316635cff0e7bf70ec0ff1.mockapi.io/todos/", taskItem)
      .then((response) => {
        getTodosFromServer();
        console.log("Создан task =>", response.data);
      })
      .catch((error) => console.log(error));
  };

  const deleteTask = (id) => {
    // alert("Пожалуйста ожидайте, задача удаляется.");
    setIsLoading(true);
    axios
      .delete(`https://63316635cff0e7bf70ec0ff1.mockapi.io/todos/${id}`)
      .then((response) => {
        console.log("удалена задача => ", response.data);
        getTodosFromServer();
      })
      .catch((error) => console.log(error));
  };

  const getTodosFromServer = () => {
    axios
      .get("https://63316635cff0e7bf70ec0ff1.mockapi.io/todos")
      .then((response) => {
        setTodos(response.data);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getTodosFromServer();
  }, []);

  return (
    <>
      <div className="container">
        <AddTaskForm addNewTask={addNewTask} />
        <section className="all-todos">
          <TodoItem
            todos={todos}
            deleteTask={deleteTask}
            isLoading={isLoading}
            toggleDoneTaskHandler={toggleDoneTaskHandler}
          />
        </section>
      </div>
    </>
  );
};

export default AllTodos;
