import {ADD_REVIEW, FAIL, LOAD_RESTAURANTS, START, SUCCESS} from '../constants'
import {fromJS} from 'immutable'

const initialState = {
  loaded: false,
  loading: false,
  error: null,
  entities: [],
}

export default (restaurantsState = fromJS(initialState), action) => {
  switch (action.type) {
    case LOAD_RESTAURANTS + START: {
      return restaurantsState.set('loaded', false).set('loading', true)
    }
    case LOAD_RESTAURANTS + SUCCESS: {
      return restaurantsState
        .set('loaded', true)
        .set('loading', false)
        .set('error', null)
        .set('entities', fromJS(action.response))
    }
    case LOAD_RESTAURANTS + FAIL: {
      return restaurantsState
        .set('loaded', false)
        .set('loading', false)
        .set('error', action.error)
    }
    case ADD_REVIEW: {
      const targetRestaurant = restaurantsState
        .get('entities')
        .find(
          restaurant => restaurant.get('id') === action.payload.restaurantId
        )
      const targetIndex = restaurantsState
        .get('entities')
        .indexOf(targetRestaurant)

      return restaurantsState.updateIn(
        ['entities', targetIndex, 'reviews'],
        reviews => reviews.push(action.generatedId)
      )
    }
    default:
      return restaurantsState
  }
}
