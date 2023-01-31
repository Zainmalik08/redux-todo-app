import { combineReducers } from "redux";
import { operationReducers } from "./todoApp/reducers/operations";

export const rootReducer = combineReducers({ operationReducers });
