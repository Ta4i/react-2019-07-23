import {normalizedReviews} from '../../fixtures'
import {arrayToMap} from '../utils'
import {ADD_REVIEW} from '../constants'
import {fromJS, Map} from 'immutable'

const initialState = fromJS(arrayToMap(normalizedReviews))

export default (reviewsState = initialState, action) => {
  switch (action.type) {
    case ADD_REVIEW: {
      const newReview = new Map({
        id: action.generatedId,
        userId: action.userId,
        text: action.payload.text,
        rating: action.payload.rating,
      })
      const returnReviewState = reviewsState.set(action.generatedId, newReview)
      return returnReviewState
    }
    default:
      return reviewsState
  }
}
