import {combineReducers} from 'redux'
import counter from './counter'
import restaurants from './restaurants'
import cart from './cart'
import dishes from './dishes'
import users from './users'
import reviews from './reviews'

export default combineReducers({
  count: counter,
  restaurants,
  cart,
  dishes,
  users,
  reviews,
})
