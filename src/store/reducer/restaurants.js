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
      const {restaurantId} = action.payload
      return {
        ...restaurantsState,
        [restaurantId]: {
          ...restaurantsState[restaurantId],
          reviews: [...restaurantsState[restaurantId].reviews, action.idReview],
        },
      }
    }
    default:
      return restaurantsState
  }
}
