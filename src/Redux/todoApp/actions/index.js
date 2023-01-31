export const ADD_TODO = "ADD_TODO";
export const DELETE = "DELETE";
export const DELETE_ALL = "DELETE_ALL";
export const UPDATE_TODO = "UPDATE_TODO";
export const UPDATE_CHECKBOX = "UPDATE_CHECKBOX";

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};
export const deleteAll = () => {
  return {
    type: DELETE_ALL,
  };
};
export const deleteSingle = (payload) => {
  return {
    type: DELETE,
    payload,
  };
};
export const editHandleSubmit = (payload) => {
  return {
    type: UPDATE_TODO,
    payload,
  };
};

export const handleCheckbox = (payload) => {
  return {
    type: UPDATE_CHECKBOX,
    payload,
  };
};
