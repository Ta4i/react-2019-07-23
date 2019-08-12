import {normalizedRestaurants} from '../../fixtures'
import {ADD_REVIEW} from '../constants'

export default (restaurantsState = normalizedRestaurants, action) => {
  switch (action.type) {
    case ADD_REVIEW: {
      const newRestarauntState = restaurantsState.map((item, index) => {
        console.log('new state res', item)
        console.log('new state res', action)
        if (item.id === action.payload.restaurantId) {
          item.reviews.push(action.id)
        }
        return item
      })
      return newRestarauntState
    }
    default:
      return restaurantsState
  }
}
