import {fromJS} from 'immutable'
import {LOAD_DISHES, START, SUCCESS, FAIL} from '../constants'

const initialState = {
  loaded: false,
  loading: false,
  error: null,
  entities: [],
}

export default (dishesState = fromJS(initialState), action) => {
  switch (action.type) {
    case LOAD_DISHES + START:
      return dishesState.set('loaded', false).set('loading', true)
    case LOAD_DISHES + SUCCESS:
      const newDishes = dishesState
        .get('entities')
        .toJS()
        .concat(action.response)
      return dishesState
        .set('loaded', true)
        .set('loading', false)
        .set('error', null)
        .set('entities', fromJS(newDishes))
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
