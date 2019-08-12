import {ADD_REVIEW} from '../constants'
import uuid from 'uuid/v1'

export default store => next => action => {
  if (action.type === ADD_REVIEW) {
    next({
      ...action,
      idUser: uuid(),
      idReview: uuid(),
    })
  } else {
    next(action)
  }
}
