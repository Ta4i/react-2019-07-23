import {arrayToMap} from '../utils'
import {ADD_REVIEW, SUCCESS, LOAD_REVIEWS} from '../constants'
import {fromJS} from 'immutable'

const initialState = {}

export default (reviewsState = fromJS(initialState), action) => {
  switch (action.type) {
    case LOAD_REVIEWS + SUCCESS: {
      return fromJS(arrayToMap(action.response))
    }
    case ADD_REVIEW: {
      const addedReview = {
        [action.generatedId]: {
          id: action.generatedId,
          text: action.payload.text,
          rating: action.payload.rating,
          userId: action.userId,
        },
      }

      return reviewsState.merge(fromJS(addedReview))
    }
    default:
      return reviewsState
  }
}
