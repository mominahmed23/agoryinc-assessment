import { v1 } from "uuid";
import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  MARK_DONE_UNDONE,
} from "../../constants";

// **  Initial State
const initialState = [];

const todoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { id: v1(), name: action.payload, completed: false }];
    case EDIT_TODO:
      return state.map((elem) => {
        if (elem.id === action.payload.id) {
          return { ...elem, name: action.payload.name };
        } else {
          return elem;
        }
      });
    case DELETE_TODO:
      return [...state.filter((elem) => elem.id !== action.payload)];
    case MARK_DONE_UNDONE:
      return state.map((elem) => {
        if (elem.id === action.payload) {
          return { ...elem, completed: !elem.completed };
        } else {
          return elem;
        }
      });
    default:
      return state;
  }
};

export default todoListReducer;
