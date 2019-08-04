import {combineReducers} from 'redux';
import counter from './counter';
import restaurants from './restaurants'
import cart from './cart'
import orderList from './order-list'

export default combineReducers({
  count: counter,
  restaurants,
  cart,
  orderList
})
