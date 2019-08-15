import {normalizedDishes} from '../../fixtures'
import {arrayToMap} from '../utils'
import {fromJS} from 'immutable'

const initialState = {
  loaded: false,
  loading: false,
  error: null,
  entities: arrayToMap(normalizedDishes),
}

export default (dishesState = fromJS(initialState), action) => {
  return dishesState
}
