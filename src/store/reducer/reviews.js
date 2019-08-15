import {ADD_REVIEW, LOAD_REVIEWS, START, FAIL, SUCCESS} from '../constants'
import {fromJS, Map} from 'immutable'

const initialState = {
  loaded: false,
  loading: false,
  error: null,
  entities: [],
}

export default (reviewsState = fromJS(initialState), action) => {
  switch (action.type) {
    case ADD_REVIEW: {
      const newReview = new Map({
        id: action.generatedId,
        userId: action.userId,
        text: action.payload.text,
        rating: action.payload.rating,
      })
      return reviewsState.update('entities', entities =>
        entities.push(newReview)
      )
    }
    case LOAD_REVIEWS + START:
      return reviewsState.set('loaded', false).set('loading', true)
    case LOAD_REVIEWS + SUCCESS:
      const newReviews = reviewsState
        .get('entities')
        .toJS()
        .concat(action.response)
      return reviewsState
        .set('loaded', true)
        .set('loading', false)
        .set('error', null)
        .set('entities', fromJS(newReviews))
    case LOAD_REVIEWS + FAIL: {
      return reviewsState
        .set('loaded', false)
        .set('loading', false)
        .set('error', action.error)
    }
    default:
      return reviewsState
  }
}
