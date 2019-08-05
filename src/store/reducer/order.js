export default (orderState = {}, action) => {
  switch (action.type) {
    case "MAKE_ORDER": {
      return action.payload;
    }
    case "DELETE_DISH_FROM_ORDER": {
      const newOrderState = { ...orderState };
      delete newOrderState[action.payload.id];
      return newOrderState;
    }
    default:
      return orderState;
  }
};
