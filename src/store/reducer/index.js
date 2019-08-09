import {combineReducers} from 'redux'
import counter from './counter'
import restaurants from './restaurants'
import cart from './cart'
import dishes from './dishes'
import reviews from './reviews'
import users from './users'

export default combineReducers({
  count: counter,
  restaurants,
  cart,
  dishes,
  reviews,
  users,
})
