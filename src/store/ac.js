import {
  ADD_REVIEW,
  ADD_TO_CART,
  DECREMENT,
  DELETE_FROM_CART,
  FAIL,
  INCREMENT,
  LOAD_DISHES,
  LOAD_RESTAURANTS,
  LOAD_REVIEWS,
  LOAD_USERS,
  SEND_ORDER,
  START,
  SUBTRACT_FROM_CART,
  SUCCESS,
} from './constants'
import {
  selectCart,
  selectReviewsLoaded,
  selectReviewsLoading,
  selectUsersLoaded,
  selectUsersLoading,
} from './selectors'
import {push} from 'connected-react-router'
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
    callAPI: id ? `/api/reviews?id=${id}` : '/api/reviews',
  }
}

export const loadDishes = id => {
  return {
    type: LOAD_DISHES,
    payload: {id},
    callAPI: id ? `/api/dishes?id=${id}` : '/api/dishes',
  }
}

export const loadUsers = () => {
  return {
    type: LOAD_USERS,
    callAPI: '/api/users',
  }
}

export const loadFullReviewsData = () => (dispatch, getState) => {
  const state = getState()

  const isReviewsLoading = selectReviewsLoading(state)
  const isReviewsLoaded = selectReviewsLoaded(state)
  if (!isReviewsLoaded && !isReviewsLoading) {
    dispatch({type: LOAD_REVIEWS + START})
    fetch('/api/reviews')
      .then(res => res.json())
      .then(response => {
        dispatch({type: LOAD_REVIEWS + SUCCESS, response})
      })
      .catch(error => dispatch({type: LOAD_REVIEWS + FAIL, error}))
  }

  const isUsersLoading = selectUsersLoading(state)
  const isUsersLoaded = selectUsersLoaded(state)
  if (!isUsersLoading && !isUsersLoaded) {
    dispatch({type: LOAD_USERS + START})
    fetch('/api/users')
      .then(res => res.json())
      .then(response => {
        dispatch({type: LOAD_USERS + SUCCESS, response})
      })
      .catch(error => dispatch({type: LOAD_USERS + FAIL, error}))
  }
}

export const sendOrder = details => (dispatch, getState) => {
  const state = getState()
  const dishes = selectCart(state)
  dispatch({
    type: SEND_ORDER,
    payload: {
      ...details,
      dishes,
    },
  })
  dispatch(push('/order-complete'))
}
