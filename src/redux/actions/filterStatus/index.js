import { CHANGE_FILTER } from "../../constants";

export const changeFilterAction = (filter) => {
  return {
    type: CHANGE_FILTER,
    payload: filter,
  };
};
