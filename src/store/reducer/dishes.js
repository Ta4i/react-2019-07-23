import {normalizedDishes} from '../../fixtures'
import {arrayToMap} from '../utils'
import {fromJS} from 'immutable'
import {LOAD_DISHES, START, SUCCESS, FAIL} from './../constants'

// const initialState = fromJS(arrayToMap(normalizedDishes))
const initialState = {
  loaded: false,
  loading: false,
  error: null,
  entities: {},
}

export default (dishesState = fromJS(initialState), action) => {
  debugger
  switch (action.type) {
    case LOAD_DISHES + START: {
      return dishesState.set('loaded', false).set('loading', true)
    }
    case LOAD_DISHES + SUCCESS: {
      return dishesState
        .set('loaded', true)
        .set('loading', false)
        .set('error', null)
        .set('entities', fromJS(arrayToMap(action.response)))
    }
    case LOAD_DISHES + FAIL: {
      return dishesState.set('error', action.error)
    }
    default:
      return dishesState
  }
}
