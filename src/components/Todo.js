import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteAll } from "../Redux/todoApp/actions";
import { deleteSingle } from "../Redux/todoApp/actions";
import { handleCheckbox } from "../Redux/todoApp/actions";

const Todo = ({ setEditForm, handleEditCLick }) => {
  const todo = useSelector((state) => state.operationReducers);

  const dispatch = useDispatch();

  const handleDeleteAll = () => {
    dispatch(deleteAll());
  };
  const handleDelete = (id) => {
    dispatch(deleteSingle(id));
    console.log(id, "id");
  };
  console.log(todo.todo, "todo");
  return (
    <>
      {todo.map((val, id) => {
        return (
          <div key={id}>
            <div>{val.id}</div>
            <input
              type="checkbox"
              checked={val.completed}
              onChange={() => {
                dispatch(handleCheckbox(val.id));
              }}
            ></input>
            <p
              style={
                val.completed === true
                  ? { textDecoration: "line-through" }
                  : { textDecoration: "" }
              }
            >
              {val.todo}
            </p>

            <button
              onClick={() => {
                handleEditCLick(val);
              }}
            >
              Edit
            </button>
            <button
              onClick={() => {
                handleDelete(id);
              }}
            >
              delete
            </button>
          </div>
        );
      })}
      {todo[1] && <button onClick={handleDeleteAll}>Delete All</button>}
    </>
  );
};

export default Todo;
