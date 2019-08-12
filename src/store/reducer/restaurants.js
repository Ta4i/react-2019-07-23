import {normalizedRestaurants} from '../../fixtures'
import {ADD_REVIEW} from '../constants'

const initialState = normalizedRestaurants.reduce(
  (restaurantsMap, restaurant) => {
    return {
      ...restaurantsMap,
      [restaurant.id]: restaurant,
    }
  },
  {}
)

export default (restaurantsState = initialState, action) => {
  switch (action.type) {
    case ADD_REVIEW: {
      const {id, restaurantId} = action.payload
      const newRestaurant = {...restaurantsState[restaurantId]}
      newRestaurant.reviews = [...restaurantsState[restaurantId].reviews, id]
      return {
        ...restaurantsState,
        [restaurantId]: newRestaurant,
      }
    }
    default:
      return restaurantsState
  }
}
