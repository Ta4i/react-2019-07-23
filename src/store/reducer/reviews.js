import {arrayToMap} from '../utils'
import {ADD_REVIEW, LOAD_REVIEWS, SUCCESS} from '../constants'
import { fromJS } from 'immutable';

const initialState = {}

export default (reviewsState = fromJS(initialState), action) => {
  switch (action.type) {
    case LOAD_REVIEWS + SUCCESS:
      reviewsState = arrayToMap(action.response)

      return fromJS(reviewsState)
    case ADD_REVIEW: {
      const newReview = {
          [action.generatedId]: {
          id: action.generatedId,
          userId: action.userId,
          text: action.payload.text,
          rating: action.payload.rating,
        }
      }

      return reviewsState.merge(fromJS(newReview))
    }
    default:
      return reviewsState
  }
}
