import {normalizedRestaurants} from '../../fixtures'
import { ADD_REVIEW } from '../constants';

const initialState = normalizedRestaurants.reduce((reviewsMap, review) => {
  return {
    ...reviewsMap,
    [review.id]: review,
  }
}, {})

export default (restaurantsState = initialState, action) => {
  switch (action.type) {
    case ADD_REVIEW:
      const {id, reviewId} = action.payload
      const restaurant = restaurantsState[id]

      return {
        ...restaurantsState,
        [id]: {
          ...restaurant,
          reviews: [...restaurant.reviews, reviewId],
        }
      }

    default:
      return restaurantsState
  }
}
