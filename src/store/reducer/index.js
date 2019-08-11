import { combineReducers } from "redux";
import counter from "./counter";
import restaurants from "./restaurants";
import reviews from "./reviews";
import cart from "./cart";
import users from "./users";
import dishes from "./dishes";

export default combineReducers({
  count: counter,
  restaurants,
  cart,
  users,
  dishes,
  reviews
});
