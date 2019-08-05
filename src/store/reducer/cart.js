export default (cartState = {}, action) => {
  switch (action.type) {
    case 'ADD_DISH': {
      const {id} = action.payload
      return {
        ...cartState,
        [id]: cartState[id] ? cartState[id] + 1 : 1
      }
    }
    case 'REMOVE_DISH': {
      const {id} = action.payload
      if (!cartState[id]) {
        return cartState
      }
      const newCartState = {...cartState}
      if (newCartState[id] === 1) {
        delete newCartState[id]
      } else {
        newCartState[id] = newCartState[id] - 1
      }
      return newCartState
    }
    case 'DELETE_ALL_DISHES_OF_THE_SAME_TYPE': {
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