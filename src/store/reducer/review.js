import {normalizedReviews} from '../../fixtures'
import {ADD_REVIEW} from '../constants'

const initialState = normalizedReviews.reduce((reviewsMap, review) => {
  return {
    ...reviewsMap,
    [review.id]: review,
  }
}, {})

export default (reviewsState = initialState, action) => {
  switch (action.type) {
    case ADD_REVIEW: {
      return {
        ...reviewsState,
        [action.newId]: action.payload.review,
      }
    }

    default:
      return reviewsState
  }
}
