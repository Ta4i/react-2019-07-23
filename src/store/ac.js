import {
  ADD_REVIEW,
  ADD_TO_CART,
  DECREMENT,
  DELETE_FROM_CART,
  INCREMENT,
  LOAD_RESTAURANTS,
  SUBTRACT_FROM_CART,
  LOAD_REVIEWS,
  LOAD_USERS,
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

export const addReview = (userName, rating, text, restaurantId) => ({
  type: ADD_REVIEW,
  payload: {
    userName,
    rating,
    text,
    restaurantId,
  },
  generateId: true,
  provideUserId: true,
})

export const loadRestaurants = () => {
  return {
    type: LOAD_RESTAURANTS,
    callAPI: '/api/restaurants',
  }
}

export const loadReviews = restaurantId => {
  return {
    type: LOAD_REVIEWS,
    callAPI: '/api/reviews/?id=' + restaurantId,
  }
}

export const loadUsers = () => {
  return {
    type: LOAD_USERS,
    callAPI: '/api/users',
  }
}
