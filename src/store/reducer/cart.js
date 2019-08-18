import {ADD_TO_CART, DELETE_FROM_CART, SUBTRACT_FROM_CART} from '../constants'

export default (cartState = {}, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const {id} = action.payload
      return {
        ...cartState,
        [id]: cartState[id] ? cartState[id] + 1 : 1,
      }
    }
    case SUBTRACT_FROM_CART: {
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
    case DELETE_FROM_CART: {
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
