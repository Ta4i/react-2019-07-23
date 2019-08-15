import { FAIL, START, SUCCESS } from "../constants";

export default store => next => action => {
  const { callAPI, ...rest } = action;
  if (!callAPI) {
    next(rest);
  } else {
    next({
      ...rest,
      type: action.type + START
    });
    fetch(callAPI)
      .then(res => res.json())
      .then(response => {
        next({
          ...rest,
          response,
          type: action.type + SUCCESS
        });
      })
      .catch(error => {
        next({
          ...rest,
          error,
          type: action.type + FAIL
        });
      });
  }
};
