import { normalizedUsers } from "../../fixtures";
import { arrayToMap } from "../utils";
import { ADD_REVIEW } from "../constants";

const initialState = arrayToMap(normalizedUsers);

export default (usersState = initialState, action) => {
  switch (action.type) {
    case ADD_REVIEW: {
      if (!usersState[action.userId]) {
        return {
          ...usersState,
          [action.userId]: {
            id: action.userId,
            name: action.payload.userName
          }
        };
      } else {
        return usersState;
      }
    }
    default:
      return usersState;
  }
};
