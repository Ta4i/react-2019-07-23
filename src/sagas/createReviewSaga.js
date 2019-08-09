import {put, takeEvery, select} from 'redux-saga/effects'
import {isUndefined, find} from 'lodash'
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
    const existUser = find(users, {name})
    const user = existUser || {id: uuidv1(), name}

    if (isUndefined(existUser)) {
      yield put(addNewUser(user))
    }

    const review = new ReviewModel({
      restaurantId: restaurant,
      userId: user.id,
      reviewText: reviewText,
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
