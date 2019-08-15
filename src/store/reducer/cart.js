import {ADD_TO_CART, DELETE_FROM_CART, SUBTRACT_FROM_CART} from '../constants'
import {Map} from 'immutable'

export default (cartState = new Map({}), action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const {id} = action.payload
      return cartState.update(id, value => (value ? value + 1 : 1))
    }
    case SUBTRACT_FROM_CART: {
      const {id} = action.payload
      if (!cartState.get(id)) {
        return cartState
      }

      if (cartState.get(id) === 1) {
        return cartState.delete(id)
      } else {
        return cartState.update(id, value => value - 1)
      }
    }
    case DELETE_FROM_CART: {
      const {id} = action.payload
      if (!cartState.get(id)) {
        return cartState
      }
      return cartState.delete(id)
    }
    default:
      return cartState
  }
}
