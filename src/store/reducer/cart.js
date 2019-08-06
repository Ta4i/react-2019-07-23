export default (cartState = {}, action) => {
  switch (action.type) {
    case 'ADD_DISH': {
      const {dish} = action.payload
      return {
        ...cartState,
        [dish.id]: cartState[dish.id] ? cartState[dish.id] + 1 : 1
      }
    }
    case 'REMOVE_DISH': {
      const {dish} = action.payload
      if (!cartState[dish.id]) {
        return cartState
      }
      const newCartState = {...cartState}
      if (newCartState[dish.id] === 1) {
        delete newCartState[dish.id]
      } else {
        newCartState[dish.id] = newCartState[dish.id] - 1
      }
      return newCartState
    }
    case 'DELETE_ORDER_ITEM': {
      const {id} = action.payload
      if (!cartState[id]) {
        return cartState
      }
      const newCartState = {...cartState}

      delete newCartState[id]
      return newCartState
    }
    default:
      return cartState
  }
}