import {arrayToMap} from '../utils'
import {START, SUCCESS, FAIL, LOAD_DISHES} from '../constants';
import { fromJS } from 'immutable';

const initialState = {}

export default (dishesState = fromJS(initialState), action) => {
  switch (action.type) {
    case LOAD_DISHES + SUCCESS:
      dishesState = arrayToMap(action.response)

      return fromJS(dishesState)

    default:
      return dishesState
  }
}
