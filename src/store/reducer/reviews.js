import {normalizedReviews} from '../../fixtures'
import {arrayToMap} from '../utils'
import {ADD_REVIEW} from '../constants'
import {fromJS} from 'immutable'

const initialState = {
  loaded: false,
  loading: false,
  error: null,
  entities: arrayToMap(normalizedReviews),
}

export default (reviewsState = fromJS(initialState), action) => {
  switch (action.type) {
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
