import {
  ADD_TO_CART,
  DECREMENT,
  DELETE_FROM_CART,
  INCREMENT,
  SUBTRACT_FROM_CART,
  SHOW_REVIEW_FORM,
  HIDE_REVIEW_FORM,
  SUBMIT_REVIEW_FORM,
  SUCCESS_REVIEW_FROM,
  ADD_NEW_USER,
  ADD_NEW_REVIEW,
  ERROR_REVIEW_FORM,
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

export const showReviewForm = () => ({
  type: SHOW_REVIEW_FORM,
})

export const hideReviewForm = () => ({
  type: HIDE_REVIEW_FORM,
})

export const submitReviewForm = ({name, restaurant, reviewText, rate}) => ({
  type: SUBMIT_REVIEW_FORM,
  payload: {
    name,
    restaurant,
    reviewText,
    rate,
  },
})

export const successReviewForm = () => ({
  type: SUCCESS_REVIEW_FROM,
})

export const errorReviewForm = () => ({
  type: ERROR_REVIEW_FORM,
})

export const addNewUser = ({id, name}) => ({
  type: ADD_NEW_USER,
  payload: {
    id,
    name,
  },
})

export const addNewReview = review => ({
  type: ADD_NEW_REVIEW,
  payload: {
    review,
  },
})
