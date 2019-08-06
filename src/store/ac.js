import { createAction } from "redux-actions";

export const increase = () => ({
  type: "INCREMENT"
});

export const decrease = () => ({
  type: "DECREMENT"
});

export const addDish = createAction("ADD_DISH", (cart, restaurantId) => ({
  cart,
  restaurantId
}));

export const removeDish = id => ({
  type: "REMOVE_DISH",
  payload: {
    id
  }
});
