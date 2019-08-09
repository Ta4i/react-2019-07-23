import {spawn} from 'redux-saga/effects'
import watchSubmitForm from './createReviewSaga'

export default function* rootSaga() {
  yield spawn(watchSubmitForm)
}
