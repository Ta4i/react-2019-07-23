import {arrayToMap} from '../utils'
import {ADD_REVIEW, LOAD_USERS, SUCCESS} from '../constants'
import { fromJS } from 'immutable';

const initialState = {}

export default (usersState = fromJS(initialState), action) => {
  switch (action.type) {
    case LOAD_USERS + SUCCESS:
      usersState = arrayToMap(action.response)

      return fromJS(usersState)
    case ADD_REVIEW: {
      if (!usersState.get(action.userId)) {
        const newUser = {
          [action.userId]: {
            id: action.userId,
            name: action.payload.userName,
          }
        }

        return usersState.merge(fromJS(newUser))
      } else {
        return usersState
      }
    }
    default:
      return usersState
  }
}
