import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Context from "./context";

import ToDoList from "./Todo/ToDoList";

import AddTodo from "./Todo/AddTodo";

function App() {
  let [todos, setTodos] = React.useState([
    { id: 1, completed: true, title: "todo 1" },
    { id: 2, completed: false, title: "todo 2" },
    { id: 3, completed: false, title: "todo 3" },
  ]);

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
    setTodos(todos.filter(todo => todo.id != id))
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="">
        <div className="container mt-5">
          <h1 className="mb-5 text-center">Todo list</h1>
          <AddTodo/>
          {todos.length ? <ToDoList todos={todos} onToggle={toggleTodo} /> :
          
          <div className='alert alert-danger'>No todos</div>
          }
          
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
