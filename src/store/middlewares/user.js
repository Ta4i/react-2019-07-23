import {ADD_USER} from '../constants'
import uuid from 'uuid/v1'

export default store => next => action => {
  if (action.type === ADD_USER) {
    next({
      ...action,
      id: uuid(),
    })
  } else {
    next(action)
  }
}
