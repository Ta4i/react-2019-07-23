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
      const {rate, review} = action.payload
      return {
        ...reviewsState,
        [action.idReview]: {
          id: action.idReview,
          rating: rate,
          text: review,
          userId: action.idUser,
        },
      }
    }
    default:
      return reviewsState
  }
}
