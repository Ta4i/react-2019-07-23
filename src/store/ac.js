export const increase = () => ({
  type: "INCREMENT"
});

export const decrease = () => ({
  type: "DECREMENT"
});

export const addDish = oDish => ({
  type: "ADD_DISH",
  payload: {
    id: oDish.id,
    name: oDish.name,
    price: oDish.price
  }
});

export const removeDish = oDish => ({
  type: "REMOVE_DISH",
  payload: {
    id: oDish.id,
    name: oDish.name,
    price: oDish.price
  }
});

export const removeOrder = oDish => ({
  type: "REMOVE_ORDER",
  payload: {
    id: oDish.id
  }
});
