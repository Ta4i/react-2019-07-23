import {normalizedRestaurants} from '../../fixtures'
import {ADD_REVIEW} from '../constants'

export default (restaurantsState = normalizedRestaurants, action) => {
  if (action.type === ADD_REVIEW) {
    const rest = restaurantsState.find(el => {
      if (action.payload.restaurant.id === el.id) {
        return el
      }
    })

    rest.reviews.push(action.payload.reviewId)

    console.log(rest)
    console.log(restaurantsState)
  }

  return restaurantsState
}
