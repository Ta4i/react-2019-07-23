import {normalizedReviews} from '../../fixtures'

const initialState = normalizedReviews.reduce((reviewsMap, rewiev) => {
  return {
    ...reviewsMap,
    [rewiev.id]: rewiev,
  }
}, {})

export default (reviewsState = initialState, action) => {
  return reviewsState
}
