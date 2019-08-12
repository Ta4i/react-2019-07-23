import {normalizedReviews} from '../../fixtures'
import {ADD_REVIEW} from '../constants'

const initialState = normalizedReviews.reduce((reviewsMap, rewiev) => {
  return {
    ...reviewsMap,
    [rewiev.id]: rewiev,
  }
}, {})

export default (reviewsState = initialState, action) => {
  switch (action.type) {
    case ADD_REVIEW: {
      const {id, name, text, rating, userId} = action.payload
      let review = {
        id,
        name,
        text,
        rating,
        userId,
      }
      return {
        ...reviewsState,
        [id]: review,
      }
    }
    default:
      return reviewsState
  }
}
