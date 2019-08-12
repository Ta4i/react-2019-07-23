import {normalizedReviews, normalizedUsers} from '../../fixtures'
import {ADD_REVIEW} from '../constants'
//import {selectUserByName} from '../selector'

const users = normalizedUsers.reduce((userMap, user) => {
  return {
    ...userMap,
    [user.id]: user,
  }
}, {})

const initialState = normalizedReviews.reduce((reviewMap, review) => {
  return {
    ...reviewMap,
    [review.id]: {
      ...review,
      ...users[review['userId']],
    },
  }
}, {})

export default (reviewState = initialState, action) => {
  switch (action.type) {
    case ADD_REVIEW: {
      return {
        ...reviewState,
        [action.id]: {
          id: action.id,
          name: action.payload.name,
          rating: action.payload.rating,
          text: action.payload.reviewText,
          userId: action.id,
        },
      }
    }
    default:
      return reviewState
  }
}
