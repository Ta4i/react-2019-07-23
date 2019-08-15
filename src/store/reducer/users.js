import {normalizedUsers} from '../../fixtures'
import {arrayToMap} from '../utils'
import {ADD_REVIEW} from '../constants'
import {fromJS} from 'immutable'

const initialState = {
  loaded: false,
  loading: false,
  error: null,
  entities: arrayToMap(normalizedUsers),
}

export default (usersState = fromJS(initialState), action) => {
  switch (action.type) {
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
