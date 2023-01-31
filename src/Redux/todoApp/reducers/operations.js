import {
  ADD_TODO,
  DELETE_ALL,
  DELETE,
  UPDATE_TODO,
  UPDATE_CHECKBOX,
} from "../actions";

const initialState = [
  {
    id: 0,
    todo: "Buy Laptop",
    completed: false,
  },
  {
    id: 1,
    todo: "Master Redux",
    completed: false,
  },
  {
    id: 2,
    todo: "Watering Plants",
    completed: true,
  },
];

export const operationReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_ALL:
      return [];
    case DELETE:
      const newState = state.filter((todo) => todo.id !== action.payload);
      return newState;
    case UPDATE_TODO:
      const data = action.payload;
      const updatedArray = [];
      state.map((item) => {
        if (item.id === data.id) {
          item.todo = data.todo;
          item.completed = data.completed;
        }
        updatedArray.push(item);
      });
      return updatedArray;
    case UPDATE_CHECKBOX:
      let todoArray = [];
      state.map((item) => {
        if (item.id === action.payload) {
          item.completed = !item.completed;
        }
        todoArray.push(item);
      });
      return todoArray;
    default:
      return state;
  }
};
