import {ADD_REVIEW} from '../constants'

const uuid = () =>
  ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  )

export default store => next => action => {
  if (action.type === ADD_REVIEW) {
    if (!localStorage.getItem('user')) {
      localStorage.setItem(
        'user',
        JSON.stringify({
          userId: uuid(),
          reviews: {},
        })
      )
    }

    const user = JSON.parse(localStorage.getItem('user'))
    const reviewId = uuid()

    user.reviews[reviewId] = {
      id: reviewId,
      userId: user.userId,
      text: action.payload.text,
      rating: action.payload.rating,
    }

    localStorage.setItem('user', JSON.stringify(user))

    action.payload.reviewId = reviewId
    action.payload.userId = user.userId
  }

  next(action)
}
