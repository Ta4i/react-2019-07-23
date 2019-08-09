import {put, takeEvery, select} from 'redux-saga/effects'
import {head, isEmpty} from 'lodash'
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
  const users = yield select(state => selectUsers(state))
  const uuidv1 = require('uuid/v1')

  const {rate, reviewText, restaurant, name} = payload

  try {
    const existUser = Object.values(users).filter(user => user.name === name)
    const user = isEmpty(existUser) ? {id: uuidv1(), name} : head(existUser)

    if (isEmpty(existUser)) {
      yield put(addNewUser(user))
    }

    const review = new ReviewModel({
      restaurantId: restaurant,
      userId: user.id,
      reviewText: reviewText || '',
      rate: rate,
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
