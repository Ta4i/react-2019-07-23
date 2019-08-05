const initialState = {
  cart: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_DISH": {
      return {
        ...state,
        // id: state.id ? state.id + 1 : 1,
        cart: [...state.cart, action.payload.cart]
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
