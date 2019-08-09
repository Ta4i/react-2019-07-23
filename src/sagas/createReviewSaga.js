import {put, takeEvery, select} from 'redux-saga/effects'
import {SUBMIT_REVIEW_FORM} from '../store/constants'
import {
  successReviewForm,
  addNewUser,
  addNewReview,
  errorReviewForm,
} from '../store/ac'
import ReviewModel from '../models/Review'
import {selectUsers} from '../store/selectors'

export function* createReviewSaga({payload}) {
  const userName = payload.name
  const users = yield select(state => selectUsers(state))

  try {
    const existUser = Object.values(users).filter(
      user => user.name === userName
    )
    const uuidv1 = require('uuid/v1')

    let user
    if (existUser.length) {
      user = existUser[0]
    } else {
      user = {id: uuidv1(), name: userName}
      yield put(addNewUser(user))
    }

    const review = new ReviewModel({
      restaurantId: payload.restaurant,
      userId: user.id,
      reviewText: payload.reviewText,
      rate: payload.rate,
    })

    yield put(addNewReview(review))
    yield put(successReviewForm())
  } catch (e) {
    yield put(errorReviewForm())
  }
}

export default function* watchSubmitForm() {
  yield takeEvery(SUBMIT_REVIEW_FORM, createReviewSaga)
}
