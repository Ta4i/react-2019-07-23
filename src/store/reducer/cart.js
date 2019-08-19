import {ADD_TO_CART, DELETE_FROM_CART, SUBTRACT_FROM_CART} from '../constants'
import {Map} from 'immutable'

export default (cartState = new Map(), action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const {id} = action.payload
      return cartState.set(id, cartState.has(id) ? cartState.get(id) + 1 : 1)
    }
    case SUBTRACT_FROM_CART: {
      const {id} = action.payload
      const amount = cartState.get(id)
      if (!amount) {
        return cartState
      }
      return amount === 1 ? cartState.delete(id) : cartState.set(id, amount - 1)
    }
    case DELETE_FROM_CART: {
      const {id} = action.payload
      if (!cartState.has(id)) {
        return cartState
      }
      return cartState.delete(id)
    }
    default:
      return cartState
  }
}
