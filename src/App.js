import "./App.css";
import Form from "./components/Form";
import Todo from "./components/Todo";
import React, { useState } from "react";

function App() {
  const [editForm, setEditForm] = useState(false);
  const [editTodo, setEditTodo] = useState("");
  const handleEditCLick = (todo) => {
    console.log(todo);
    setEditForm(true);
    setEditTodo(todo);
  };
  return (
    <div className="App">
      <Form
        editForm={editForm}
        handleEditCLick={handleEditCLick}
        editTodo={editTodo}
      />
      <Todo
        editForm={editForm}
        setEditForm={setEditForm}
        handleEditCLick={handleEditCLick}
      />
    </div>
  );
}

export default App;
