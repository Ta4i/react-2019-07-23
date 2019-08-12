import {
  ADD_TO_CART,
  DECREMENT,
  DELETE_FROM_CART,
  INCREMENT,
  SUBTRACT_FROM_CART,
  ADD_REVIEW,
} from './constants'

export const increase = () => ({
  type: INCREMENT,
})

export const decrease = () => ({
  type: DECREMENT,
})

export const addDishToCart = id => ({
  type: ADD_TO_CART,
  payload: {
    id,
  },
})

export const subtractDishFromCart = id => ({
  type: SUBTRACT_FROM_CART,
  payload: {
    id,
  },
})

export const deleteDishFromCart = id => ({
  type: DELETE_FROM_CART,
  payload: {
    id,
  },
})

export const addReview = values =>
  withId({
    type: ADD_REVIEW,
    payload: {
      ...values,
    },
  })

function withId(action) {
  return {...action, generateId: true}
}
