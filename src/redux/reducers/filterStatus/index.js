import { CHANGE_FILTER } from "../../constants";

// **  Initial State
const initialState = 1;

const filterStatusReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.payload;
    default:
      return state;
  }
};

export default filterStatusReducer;
