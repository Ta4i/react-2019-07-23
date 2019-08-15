import {ADD_REVIEW, FAIL, LOAD_USERS, START, SUCCESS} from '../constants'
import {arrayToMap} from '../utils'
import {fromJS} from 'immutable'

const initialState = {
  loaded: false,
  loading: false,
  error: null,
  entities: [],
}

export default (usersState = fromJS(initialState), action) => {
  switch (action.type) {
    case LOAD_USERS + START: {
      return usersState.set('loaded', false).set('loading', true)
    }
    case LOAD_USERS + SUCCESS: {
      return usersState
        .set('loaded', true)
        .set('loading', false)
        .set('error', null)
        .set('entities', fromJS(arrayToMap(action.response)))
    }
    case LOAD_USERS + FAIL: {
      return usersState
        .set('loaded', false)
        .set('loading', false)
        .set('error', action.error)
    }
    case ADD_REVIEW: {
      if (!usersState[action.userId]) {
        const newUser = fromJS({
          [action.userId]: {
            id: action.userId,
            name: action.payload.userName,
          },
        })
        return usersState.set(
          'entities',
          usersState.get('entities').merge(newUser)
        )
      } else {
        return usersState
      }
    }
    default:
      return usersState
  }
}
