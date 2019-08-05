export const increase = () => ({
  type: "INCREMENT"
});

export const decrease = () => ({
  type: "DECREMENT"
});

export const addDish = id => ({
  type: "ADD_DISH",
  payload: {
    id
  }
});

export const removeDish = id => ({
  type: "REMOVE_DISH",
  payload: {
    id
  }
});

export const makeOrder = orderObj => ({
  type: "MAKE_ORDER",
  payload: orderObj
});

export const deleteDishFromOrder = id => ({
  type: "DELETE_DISH_FROM_ORDER",
  payload: {
    id
  }
});
