import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  MARK_DONE_UNDONE,
} from "../../constants";

export const addTodoAction = (name) => {
  return {
    type: ADD_TODO,
    payload: name,
  };
};

export const deleteTodoAction = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};

export const editTodoAction = (id, name) => {
  return {
    type: EDIT_TODO,
    payload: { id, name },
  };
};

export const markDoneUndone = (id) => {
  return {
    type: MARK_DONE_UNDONE,
    payload: id,
  };
};
