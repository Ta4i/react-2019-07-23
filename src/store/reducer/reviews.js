import {normalizedReviews} from '../../fixtures'

const initialState = normalizedReviews.reduce((reviewsMap, review) => {
  return {
    ...reviewsMap,
    [review.id]: review,
  }
}, {})

export default (reviewsState = initialState, action) => {
  return reviewsState
}
