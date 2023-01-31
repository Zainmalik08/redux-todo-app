import React, { useEffect, useState } from "react";
import "./Form.css";
import { useDispatch } from "react-redux";
import { addTodo, editHandleSubmit } from "../Redux/todoApp/actions";

const Form = ({ editForm, handleEditCLick, editTodo }) => {
  const [todoValue, setTodoValue] = useState("");
  const [editValue, setEditValue] = useState("");
  useEffect(() => {
    setEditValue(editTodo.todo);
    console.log(editTodo.todo, "check");
  }, [editTodo]);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    let date = new Date();
    let time = date.getTime();
    let todoObj = {
      id: time,
      todo: todoValue,
      completed: false,
    };
    setTodoValue("");
    dispatch(addTodo(todoObj));
  };
  const editSubmit = (e) => {
    e.preventDefault();
    let editedObj = {
      id: editTodo.id,
      todo: editValue,
      completed: true,
    };
    dispatch(editHandleSubmit(editedObj));
  };
  return (
    <>
      {editForm === false ? (
        <>
          <form className="form" onSubmit={handleSubmit}>
            <label>Add your todo-itmes</label>
            <div>
              <input
                type="text"
                value={todoValue}
                onChange={(e) => {
                  setTodoValue(e.target.value);
                }}
              />
              <button type="submit">Submit</button>
            </div>
          </form>
        </>
      ) : (
        <>
          <form className="form" onSubmit={editSubmit}>
            <label>update your todo-itmes</label>
            <div>
              <input
                type="text"
                value={editValue || ""}
                onChange={(e) => {
                  setEditValue(e.target.value);
                }}
              />
              <button type="submit">Update</button>
            </div>
          </form>
        </>
      )}
    </>
  );
};

export default Form;
