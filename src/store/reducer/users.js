import {arrayToMap} from '../utils'
import {ADD_REVIEW, SUCCESS, LOAD_USERS} from '../constants'
import {fromJS} from 'immutable'

const initialState = {}

export default (usersState = fromJS(initialState), action) => {
  switch (action.type) {
    case LOAD_USERS + SUCCESS: {
      return fromJS(arrayToMap(action.response))
    }
    case ADD_REVIEW: {
      if (!usersState[action.userId]) {
        const user = {
          [action.userId]: {
            id: action.userId,
            name: action.payload.userName,
          },
        }

        return usersState.merge(fromJS(user))
      } else {
        return usersState
      }
    }
    default:
      return usersState
  }
}
