import {normalizedRestaurants} from '../../fixtures'
import {ADD_REVIEW} from '../constants'

export default (restaurantsState = normalizedRestaurants, action) => {
  switch (action.type) {
    case ADD_REVIEW: {
      return restaurantsState.map(item =>
        item.id === action.payload.review.restId
          ? {...item, reviews: [...item.reviews, action.newId]}
          : item
      )
    }

    default:
      return restaurantsState
  }
}
