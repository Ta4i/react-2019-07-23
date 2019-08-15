import {fromJS} from 'immutable'
import {LOAD_DISHES, SUCCESS} from '../constants'
import {arrayToMap} from '../utils'

const initialState = {}

export default (dishesState = fromJS(initialState), action) => {
  switch (action.type) {
    case LOAD_DISHES + SUCCESS: {
      return fromJS(arrayToMap(action.response))
    }
    default: {
      return dishesState
    }
  }
}
