import {arrayToMap} from '../utils'
import {fromJS} from 'immutable'
import {FAIL, LOAD_DISHES, START, SUCCESS} from '../constants'

const initialState = {
  loaded: false,
  loading: false,
  loadedRestaurants: {},
  error: null,
  entities: {},
}

export default (dishesState = fromJS(initialState), action) => {
  switch (action.type) {
    case LOAD_DISHES + START: {
      return dishesState.set('loaded', false).set('loading', true)
    }
    case LOAD_DISHES + SUCCESS: {
      return dishesState
        .set('loaded', true)
        .set('loading', false)
        .setIn(['loadedRestaurants', action.payload.id], true)
        .set('error', null)
        .mergeIn(['entities'], fromJS(arrayToMap(action.response)))
    }
    case LOAD_DISHES + FAIL: {
      return dishesState
        .set('loaded', false)
        .set('loading', false)
        .set('error', action.error)
    }
    default:
      return dishesState
  }
}
