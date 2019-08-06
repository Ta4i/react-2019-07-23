import {combineReducers} from 'redux';
import counter from './counter';
import restaurants from './restaurants'
import cart from './cart'

export default combineReducers({
  count: counter,
  restaurants,
  cart,
})
