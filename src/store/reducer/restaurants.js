import {normalizedRestaurants} from '../../fixtures'
import {ADD_NEW_REVIEW} from '../constants'

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
    case ADD_NEW_REVIEW:
      const restaurant =
        restaurantsState[action.payload.review.getRestaurantId()]
      return {
        ...restaurantsState,
        [action.payload.review.getRestaurantId()]: {
          ...restaurant,
          reviews: [...restaurant.reviews, action.payload.review.getId()],
        },
      }
    default:
      return restaurantsState
  }
}
