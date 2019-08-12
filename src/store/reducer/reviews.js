import { normalizedReviews } from "../../fixtures";
import { ADD_COMM } from "../constants";
import { selectReviews } from "../selectors";
import {} from "../index";

export default (reviewsState = normalizedReviews, action) => {
  /*switch (action.type) {
    case ADD_COMM: {
      // debugger
      const {restaurantId,user,comm} = action.payload;
      return {
        ...reviewsState,
        //[id]: cartState[id] ? cartState[id] + 1 : 1
      };
    }
    default:sState;
  }
return review*/
  return reviewsState;
};
