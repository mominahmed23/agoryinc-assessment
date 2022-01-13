/** @format */

// ** Redux Imports
import { combineReducers } from "redux";

// ** Reducers Imports
import todoList from "./todoList";
import filterStatus from "./filterStatus";

const rootReducer = combineReducers({
  todoList,
  filterStatus,
});

export default rootReducer;
