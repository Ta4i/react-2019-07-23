import {normalizedReviews} from '../../fixtures'

const initialState = normalizedReviews.reduce((reviewsMap, review) => {
  //так менее затратно перевести из массива в объект
  return {
    ...reviewsMap,
    [review.id]: review,
  }
}, {})

export default (reviewsState = initialState, action) => {
  return reviewsState
}
