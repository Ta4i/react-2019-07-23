import {normalizedReviews} from '../../fixtures'
import {ADD_NEW_REVIEW} from '../constants'

const initialState = normalizedReviews.reduce((reviewsMap, review) => {
  return {
    ...reviewsMap,
    [review.id]: review,
  }
}, {})

export default (reviewsState = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_REVIEW:
      return {
        ...reviewsState,
        [action.payload.review.getId()]: {
          id: action.payload.review.getId(),
          userId: action.payload.review.getUserId(),
          text: action.payload.review.getText(),
          rating: action.payload.review.getRate(),
        },
      }
    default:
      return reviewsState
  }
}
