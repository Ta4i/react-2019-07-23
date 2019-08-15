import {ADD_REVIEW, FAIL, LOAD_REVIEWS, START, SUCCESS} from '../constants'
import {arrayToMap} from '../utils'
import {fromJS} from 'immutable'

const initialState = {
  loaded: false,
  loading: false,
  error: null,
  entities: [],
}

export default (reviewsState = fromJS(initialState), action) => {
  switch (action.type) {
    case LOAD_REVIEWS + START: {
      return reviewsState.set('loaded', false).set('loading', true)
    }
    case LOAD_REVIEWS + SUCCESS: {
      return reviewsState
        .set('loaded', true)
        .set('loading', false)
        .set('error', null)
        .set('entities', fromJS(arrayToMap(action.response)))
    }
    case LOAD_REVIEWS + FAIL: {
      return reviewsState
        .set('loaded', false)
        .set('loading', false)
        .set('error', action.error)
    }
    case ADD_REVIEW: {
      const newReview = fromJS({
        [action.generatedId]: {
          id: action.generatedId,
          userId: action.userId,
          text: action.payload.text,
          rating: action.payload.rating,
        },
      })
      return reviewsState.set(
        'entities',
        reviewsState.get('entities').merge(newReview)
      )
    }
    default:
      return reviewsState
  }
}
