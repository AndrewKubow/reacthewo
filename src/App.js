import React, { useEffect } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Context from "./context";

import ToDoList from "./Todo/ToDoList";

import AddTodo from "./Todo/AddTodo";
import Loader from "./Loader";

function App() {
  let [todos, setTodos] = React.useState([]);
  const [loading, setLoading] = React.useState(true)

  
  const url = 'https://jsonplaceholder.typicode.com/todos?_limit=5'

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then(
        (todos) =>
          setTimeout(() => {
            setTodos(todos);
            setLoading(false)
          }, 2000) // imitate long loading
      );
  }, []);

  function toggleTodo(id) {
    setTodos(
      (todos = todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }))
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function addTodo(title) {
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
          completed: false,
        },
      ])
    );
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="">
        <div className="container mt-5">
          <h1 className="mb-5 text-center">Todo list</h1>
          
          <AddTodo onCreate={addTodo} />

          {loading && <Loader/>}
          {todos.length ? (
            <ToDoList todos={todos} onToggle={toggleTodo} />
          ) : (
            loading ? null :
            <div className="alert alert-danger">No todos</div>
          )}
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
