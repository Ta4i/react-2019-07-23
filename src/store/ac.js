import {
  ADD_REVIEW,
  ADD_TO_CART,
  DECREMENT,
  DELETE_FROM_CART,
  INCREMENT,
  LOAD_DISHES,
  LOAD_RESTAURANTS,
  LOAD_REVIEWS,
  LOAD_USERS,
  SUBTRACT_FROM_CART,
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

export const loadReviews = id => {
  return {
    type: LOAD_REVIEWS,
    callAPI: id ? `/api/reviews/id=${id}` : '/api/reviews',
  }
}

export const loadDishes = id => {
  return {
    type: LOAD_DISHES,
    callAPI: id ? `/api/dishes/id=${id}` : '/api/dishes',
  }
}

export const loadUsers = () => {
  return {
    type: LOAD_USERS,
    callAPI: '/api/users',
  }
}
