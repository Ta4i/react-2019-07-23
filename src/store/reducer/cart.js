export default (cartState = {}, action) => {
  switch (action.type) {
    case "ADD_DISH": {
      const { id, name, price } = action.payload;
      return {
        ...cartState,
        [id]: {
          count: cartState[id] ? cartState[id].count + 1 : 1,
          name,
          price
        }
      };
    }
    case "REMOVE_DISH": {
      const { id, name, price } = action.payload;
      if (!cartState[id]) {
        return cartState;
      }
      const newCartState = { ...cartState };
      if (newCartState[id] === 1) {
        delete newCartState[id];
      } else {
        newCartState[id] = {
          count: newCartState[id].count - 1,
          name,
          price
        };
      }
      return newCartState;
    }
    case "DELETE_DISH": {
      const { id } = action.payload;
      if (!cartState[id]) {
        return cartState;
      }
      const newCartState = { ...cartState };
      delete newCartState[id];
      return newCartState;
    }
    default:
      return cartState;
  }
};
