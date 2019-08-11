import {normalizedReviews} from '../../fixtures'
import users from './users'

const initialState = normalizedReviews.reduce((reviewsMap, rewiev) => {
  return {
    ...reviewsMap,
    [rewiev.id]: rewiev,
  }
}, {})

export default (reviewsState = initialState, action) => {
  return reviewsState
}
