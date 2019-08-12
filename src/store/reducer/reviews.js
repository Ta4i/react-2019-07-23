import {normalizedReviews} from '../../fixtures'
import { ADD_REVIEW } from '../constants';

const initialState = normalizedReviews.reduce((reviewsMap, review) => {
  return {
    ...reviewsMap,
    [review.id]: review,
  }
}, {})

export default (reviewsState = initialState, action) => {
  switch (action.type) {
    case ADD_REVIEW:
      const {reviewId, userId, review} = action.payload
      const {text, rating} = review
      return {
        ...reviewsState,
        [reviewId]: {
          id: reviewId,
          rating,
          text,
          userId,
        },
      }
  
    default:
      return reviewsState
  }
}
