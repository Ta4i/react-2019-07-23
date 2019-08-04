export default (cartState = {}, action) => {
  console.log(action.type);
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
      const { id } = action.payload;
      if (!cartState[id]) {
        return cartState;
      }
      const newCartState = { ...cartState };
      if (newCartState[id].count === 1) {
        delete newCartState[id];
      } else {
        newCartState[id].count = newCartState[id].count - 1;
      }
      return newCartState;
    }
    case "REMOVE_ORDER": {
      const { id } = action.payload;
      if (!cartState[id]) {
        return cartState;
      } else {
        const newCartState = { ...cartState };
        delete newCartState[id];
        return newCartState;
      }
    }
    default:
      return cartState;
  }
};
