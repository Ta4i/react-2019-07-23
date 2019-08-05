export const increase = () => ({
  type: "INCREMENT"
});

export const decrease = () => ({
  type: "DECREMENT"
});

export const addDish = (id, name, price) => ({
  type: "ADD_DISH",
  payload: {
    id,
    name,
    price
  }
});

export const removeDish = (id, name, price) => ({
  type: "REMOVE_DISH",
  payload: {
    id,
    name,
    price
  }
});

export const deleteDish = id => ({
  type: "DELETE_DISH",
  payload: {
    id
  }
});
