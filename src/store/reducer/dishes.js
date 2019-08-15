import { normalizedDishes } from "../../fixtures";
import { arrayToMap } from "../utils";

const initialState = arrayToMap(normalizedDishes);

export default (dishesState = initialState, action) => {
  return dishesState;
};
