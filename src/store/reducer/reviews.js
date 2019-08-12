import {normalizedReviews} from '../../fixtures'
import {ADD_REVIEW} from '../constants'

const initialState = normalizedReviews.reduce((reviewsMap, review) => {
  return {
    ...reviewsMap,
    [review.id]: review,
  }
}, {})

export default (reviewsState = initialState, action) => {
  if (action.type === ADD_REVIEW) {
    reviewsState[action.payload.reviewId] = {
      id: action.payload.reviewId,
      userId: action.payload.userId,
      text: action.payload.text,
      rating: action.payload.rating,
    }
  }

  return reviewsState
}
