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

export const clearDish = id => ({
  type: "CLEAR_DISH",
  payload: {
    id
  }
});
