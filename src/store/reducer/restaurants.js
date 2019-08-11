import {normalizedRestaurants} from '../../fixtures'

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
  return restaurantsState
}
