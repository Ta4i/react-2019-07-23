import {combineReducers} from 'redux'
import {connectRouter} from 'connected-react-router'
import counter from './counter'
import restaurants from './restaurants'
import cart from './cart'
import dishes from './dishes'
import users from './users'
import reviews from './reviews'
import history from '../history'

export default combineReducers({
  router: connectRouter(history),
  count: counter,
  restaurants,
  cart,
  dishes,
  users,
  reviews,
})
