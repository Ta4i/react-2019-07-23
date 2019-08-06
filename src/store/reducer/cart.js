const initialState = {
  cart: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_DISH": {
      const newItem = state.cart.find(
        item => item.id === action.payload.cart.id
      );

      if (newItem !== undefined) {
        const newItemArray = state.cart.map(item =>
          item.id === action.payload.cart.id
            ? { ...item, counter: item.counter + 1 }
            : item
        );

        return { ...state, cart: newItemArray };
      }

      return {
        ...state,
        cart: [
          ...state.cart,
          {
            id: action.payload.cart.id,
            counter: 1,
            restaurantId: action.payload.restaurantId
          }
        ]
      };
    }
    case "REMOVE_DISH": {
      const { id } = action.payload;
      if (!state[id]) {
        return state;
      }
      const newCartState = { ...state };
      if (newCartState[id] === 1) {
        delete newCartState[id];
      } else {
        newCartState[id] = newCartState[id] - 1;
      }
      return newCartState;
    }
    default:
      return state;
  }
};
