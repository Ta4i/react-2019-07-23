import {normalizedReviews} from '../../fixtures'

export default (reviewsState = normalizedReviews, action) => {
  switch (action.type) {
    case 'ADD_REVIEW':
      const {id, userId, text, rating} = action.comment
      return [
        ...reviewsState,
        {
          id: id,
          userId: userId,
          text: text,
          rating: rating,
        },
      ]
    default:
      return reviewsState
  }
}
