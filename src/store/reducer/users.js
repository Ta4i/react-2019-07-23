import {normalizedUsers} from '../../fixtures'
import {ADD_NEW_USER} from '../constants'

const initialState = normalizedUsers.reduce((usersMap, user) => {
  return {
    ...usersMap,
    [user.id]: user,
  }
}, {})

export default (usersState = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_USER: {
      return {
        ...usersState,
        [action.payload.id]: {
          id: action.payload.id,
          name: action.payload.name,
        },
      }
    }
    default:
      return usersState
  }
}
